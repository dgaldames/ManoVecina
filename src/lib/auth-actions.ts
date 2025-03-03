'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
    const supabase = await createClient()

    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signInWithPassword(data)

    if (error) {
        return {error}
    }

    const {data : existingUser} = await supabase.from('profiles') 
    .select('*')
    .eq('email', data.email)
    .limit(1)
    .single()

    if(!existingUser){
        const { error: insertError } = await supabase.from('profiles') //AQUI METEMOS AL USUARIO EN LA TABLA 'profiles'
        .insert({
            email: data.email
        })
        if(insertError){
            console.log(insertError)
            return { error: insertError,user: null }
        }
    }

    revalidatePath('/', 'layout')
    return {error: null}
}

export async function signup(formData: FormData){
    const supabase = await createClient()
    const credentials = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    };
    const { error, data } = await supabase.auth.signUp({
        email: credentials.email,
        password: credentials.password,
        options: {
            data:{
                username: credentials.email
            }
        }
    })
    
    if(error){
        return{
            status: error.message,
            user: null
        }
    }else if(data.user?.identities?.length === 0){
        return{
            status: 'Ya existe un usuario con este correo',
            user: null
        }
    }
    
    revalidatePath('/', 'layout')
    return{error:null}
}

export async function signout() {
    const supabase = await createClient();
    const { error } = await supabase.auth.signOut();
    if (error) {
        console.log(error);
        redirect("/error");
    }

    redirect("/");
}

export async function signInWithGoogle() {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
            redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard`,  
            queryParams: {                                                
            access_type: "offline",
            prompt: "consent",
            },
        },
        });
    if (error) {
        console.log(error);
        redirect("/error");
    }

    redirect(data.url)
}

//finalmente el login con google no funciona debido a que me marca el usuario como null
//el registro solo llega hasta la autenticacion, mas no hasta la tabla 'profiles'
//TODO
//ARREGLARLO EN UN FUTURO.

/* export async function afterGoogleLogin(){
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    console.log('user', user)

    if(!user){
        return { status: 'error' }
    }

    const { data: existingUser } = await supabase.from('profiles')
        .select('*')
        .eq('email', user.email)
        .limit(1)
        .single()
        
        if(!existingUser){
            await supabase.from('profiles').
                insert({ 
                    id: user.id,
                    email: user.email
                })
        }
}  */

export async function forgotPassword(formData: FormData) {
    const supabase = await createClient();
    const { error } = await supabase.auth.resetPasswordForEmail(
        formData.get('email') as string,
        {
            redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/reset-password`,
        }
    )
    if (error) {
        console.log(error);
        redirect("/error");
    }
    /* redirect("/"); */
    return { status: 'success' }
}

export async function resetPassword(formData: FormData, code: string) {
    const supabase = await createClient();
    const {error: CodeError} = await supabase.auth.exchangeCodeForSession(code)

    if (CodeError) {
        return { status: CodeError.message }
    }

    const { error } = await supabase.auth.updateUser({
        password: formData.get('password') as string,
    })

    if(error){
        return { status: error.message }
    }

    return { status: 'success' }
}

export async function insertService(formData: FormData){
    const supabase = await createClient()
    //Leemos y validamos los campos
    const nombre = formData.get('nombre') as string
    const telefono = formData.get('telefono') as string
    const nom_serv = formData.get('nom_serv') as string
    const tarifa = formData.get('tarifa') as string
    const disponibilidad = formData.get('disponibilidad') as string
    const descripcion = formData.get('descripcion') as string
    const experiencia = formData.get('experiencia') as string

    if(!nombre || !telefono || !nom_serv || !tarifa || !disponibilidad || !descripcion){
        return { status: 'error', message: 'Todos los campos son requeridos' }
    }

    const newService = {
        nombre,
        telefono,
        nom_serv,
        tarifa,
        disponibilidad,
        descripcion,
        experiencia
    }

    const { error } = await supabase
        .from('servicios_persona')
        .insert([newService])

    if(error){
        return { status: error.message}
    }
    return { status: 'success'}
}
