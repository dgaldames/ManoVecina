'use client'

import UserProfile from "@/components/dashboard-components/user-profile"
import { createClient } from "@/utils/supabase/client"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"

export default function DynamicProfilePage() {

    const  { userId } = useParams()
    const [profile, setProfile] = useState<{
        nombre: string,
        telefono: string,
        nom_serv: string,
        tarifa: string,
        disponibilidad: string,
        descripcion: string,
        experiencia: string
    } | null>(null)

    useEffect(() => {
        async function fetchProfile() {
            const supabase = createClient()
            const { data, error} = await supabase
                .from('servicios_persona')
                .select('*')
                .eq('id', userId)
                .single()
            if(error){
                console.log("Error al obtener el perfil: ", error)
            }else if(data){
                setProfile(data)
            }
        }
        fetchProfile();
        }, [userId])


    //Mejorar este mensaje de carga en un futuro.
    if(!profile){
        return <p>Cargando Perfil...</p>
    }
    
    return(
        <div>
            <h1 className="text-2xl font-bold mb-4">Perfil del Usuario</h1>
            <p className="mb-2">ID del usuario: {userId}</p>
            <UserProfile 
                userName={profile.nombre}
                userCell={profile.telefono}
                userService={profile.nom_serv}
                userDescription={profile.descripcion}
                userSchedule={profile.disponibilidad}
                userPrice={profile.tarifa}
                userExperience={profile.experiencia}
                >
            </UserProfile>
        </div>
    )
}
