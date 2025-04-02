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
    if (!profile) {
        return (
            <div className="flex flex-col items-center justify-center h-full py-20">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-vecino dark:border-orange-500"></div>
                <p className="mt-6 text-xl font-semibold text-gray-700 dark:text-gray-300">Cargando Perfil...</p>
            </div>
        );
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
