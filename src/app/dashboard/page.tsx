
import React from "react"
//import { createClient } from "../utils/supabase/supabase-server"
import UserCard from "@/components/dashboard-components/user-card"

export default function Page() {

    return (
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <UserCard userName={"Diego Galdames"} userService={"Informatico"} userDetails="Experto en desarrollo web y gestion de proyectos"></UserCard>
                <UserCard userName={"Diego Galdames"} userService={"Informatico"} userDetails="Experto en desarrollo web y gestion de proyectos"></UserCard>
                <UserCard userName={"Diego Galdames"} userService={"Informatico"} userDetails="Experto en desarrollo web y gestion de proyectos"></UserCard>
            </div>
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <UserCard userName={"Diego Galdames"} userService={"Informatico"} userDetails="Experto en desarrollo web y gestion de proyectos"></UserCard>
                <UserCard userName={"Diego Galdames"} userService={"Informatico"} userDetails="Experto en desarrollo web y gestion de proyectos"></UserCard>
                <UserCard userName={"Diego Galdames"} userService={"Informatico"} userDetails="Experto en desarrollo web y gestion de proyectos"></UserCard>
            </div>
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <UserCard userName={"Diego Galdames"} userService={"Informatico"} userDetails="Experto en desarrollo web y gestion de proyectos"></UserCard>
                <UserCard userName={"Diego Galdames"} userService={"Informatico"} userDetails="Experto en desarrollo web y gestion de proyectos"></UserCard>
                <UserCard userName={"Diego Galdames"} userService={"Informatico"} userDetails="Experto en desarrollo web y gestion de proyectos"></UserCard>
            </div>
        </div>
    )
}