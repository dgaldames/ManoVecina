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
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            {myServices.map((service) => (
                <UserCard
                    key={service.id}
                    userId={service.id}
                    userName={service.nombre}
                    userService={service.nom_serv}
                    userDetails={service.descripcion}
                />
            ))}
            {/* <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <UserCard userName={"Diego Galdames"} userService={"Informatico"} userDetails="Experto en desarrollo web y gestion de proyectos"></UserCard>
                <UserCard userName={"Diego Galdames"} userService={"Informatico"} userDetails="Experto en desarrollo web y gestion de proyectos"></UserCard>
                <UserCard userName={"Diego Galdames"} userService={"Informatico"} userDetails="Experto en desarrollo web y gestion de proyectos"></UserCard>
            </div> */}
        </div>
    )
}