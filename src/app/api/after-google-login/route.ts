import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';

export async function GET() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    console.log('user', user);

    if (!user) {
    // Devuelve respuesta clara para saber que no hay sesión
        return NextResponse.json({ status: 'error', message: 'No user in session' });
    }

    const { data: existingUser } = await supabase
        .from('profiles')
        .select('*')
        .eq('email', user.email)
        .limit(1)
        .single();

    if (!existingUser) {
        await supabase.from('profiles').insert({ 
        id: user.id, 
        email: user.email 
    });
        console.log('Perfil insertado en la tabla profiles');
    } else {
        console.log('Usuario ya existe en la tabla profiles');
    }

  // Devuelve respuesta final (éxito)
    return NextResponse.json({ status: 'ok', user: user.email });
}
