
import React from "react"
import UserCard from "@/components/dashboard-components/user-card"
import { getAllServices } from "@/lib/auth-actions"

export default async function Page() {

    const servicesResult = await getAllServices();
    let services = [];
    if(servicesResult.status === 'success' && servicesResult.data){
        services = servicesResult.data;
    }


    return (
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            {services.map((service) => (
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