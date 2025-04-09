import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET(request: Request){
    const { searchParams } = new URL(request.url)
    const keyword = searchParams.get('keyword') || ''

    const supabase = await createClient();

    const { data, error } = await supabase
        .from('servicios_persona')
        .select('*') 
        .or(`nombre.ilike.%${keyword}%,nom_serv.ilike.%${keyword}%,descripcion.ilike.%${keyword}%`)

    if(error){
        return NextResponse.json({ status: 'error', message: error.message }, { status: 500 })
    }

    return NextResponse.json({ status: 'success', data }, { status: 200 }
    )
}