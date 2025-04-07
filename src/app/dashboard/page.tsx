'use client'


import { useEffect } from "react"
import UserCard from "@/components/dashboard-components/user-card"
//import { getAllServices } from "@/lib/auth-actions"
import { useServices } from "@/hooks/useServices"

export default function Page() {

    const { myServices, getServices} = useServices()


    useEffect(() => {
        getServices()
    }, [])

    return (
        <div className="grid auto-rows-min md:grid-cols-3 gap-4 p-4 pt-0">
            {myServices.map((service) => (
                <UserCard
                    key={service.id}
                    userId={service.id}
                    userName={service.nombre}
                    userService={service.nom_serv}
                    userDetails={service.descripcion}
                    userImage={service.foto ? service.foto : "/dashboard-imgs/User_pfp_3.jpg"}
                />
            ))}
        </div>
    )
}