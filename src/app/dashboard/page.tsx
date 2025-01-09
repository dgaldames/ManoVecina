'use client'

import React from "react"

//import { AppSidebar } from "@/components/app-sidebar"
import {
    /* Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator, */
} from "@/components/ui/breadcrumb"
//import Link from "next/link"
//import { Separator } from "@/components/ui/separator"
/* import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar" */

import UserCard from "@/components/dashboard-components/user-card"

export default function Page() {

    return (
        <div className="dark:bg-darkbg flex flex-1 flex-col gap-4 p-4 pt-0">
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