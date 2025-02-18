'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
    const supabase = await createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signInWithPassword(data)

    if (error) {
        return {error}
    }
    revalidatePath('/', 'layout')
    return {error: null}
    }

export async function signup(formData: FormData) {
    const supabase = await createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signUp(data)

    if (error) {
        return {error}
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
            redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard`,  //Logre que lo reconociera con este formato
            queryParams: {                                                //Y creo que algo de aca me genera las cookies pero no se que
            access_type: "offline",
            prompt: "consent",
            },
        },
        });
    //TODO QUIZAS HACER UNA PAGINA DE ERROR PARA ESTO
    if (error) {
        console.log(error);
        redirect("/error");
    }

    redirect(data.url)
}

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
