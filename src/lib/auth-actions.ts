'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
    const supabase = await createClient() //Instancia de Supabase para interactuar con la BBDD.

    const data = {                        //Obtenemos datos del fomrulario.
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signInWithPassword(data) //Autenticamos al usuario con los datos obtenidos del formulario.

    if (error) { //Si hubo un error lo mostramos.
        return {error}
    }
    //Revisamos que el usuario exista en la tabla 'profiles'
    const {data : existingUser} = await supabase.from('profiles') //Hacemos un destructuring para obtener el usuario de la tabla 'profiles'
    .select('*')                                                  //Ya que el supabase.from me devuelve un objeto
    .eq('email', data.email)                                      //Con data{} y error.
    .limit(1)
    .single()

    if(!existingUser){
        const { error: insertError } = await supabase.from('profiles') //Si el usuario en null, lo metemos a la tabla.
        .insert({
            email: data.email
        })
        if(insertError){                                               //Si hubo un error lo mostramos.
            console.log(insertError)
            return { error: insertError,user: null }
        }
    }

    revalidatePath('/', 'layout')
    return {error: null}
}

export async function signup(formData: FormData){ //Si no lo pongo FormData, el formData es de tipo any.
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
    //Se extraen los valores del FormData o del formulario.
    const nombre = formData.get('nombre') as string
    const telefono = formData.get('telefono') as string
    const nom_serv = formData.get('nom_serv') as string
    const tarifa = formData.get('tarifa') as string
    const disponibilidad = formData.get('disponibilidad') as string
    const descripcion = formData.get('descripcion') as string
    const experiencia = formData.get('experiencia') as string
    //Vemos que no falte ningun campo obligatorio.
    if(!nombre || !telefono || !nom_serv || !tarifa || !disponibilidad || !descripcion){
        return { status: 'error', message: 'Todos los campos son requeridos' }
    }
    //Creamos un objeto con los valores obtenidos del formulario.
    const newService = {
        nombre,
        telefono,
        nom_serv,
        tarifa,
        disponibilidad,
        descripcion,
        experiencia
    }
    //Lo insertamos en la tabla 'servicios_persona'
    const { error } = await supabase  //Siempre en estas sentencias se devuelve un data y un error, en este caso
        .from('servicios_persona')    //Nosotros rescatamos el error.
        .insert([newService])         //Se inserta como un array pq asi lo espera Supabase.

    if(error){
        return { status: error.message}
    }
    return { status: 'success'}
}
