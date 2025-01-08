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
//import { Separator } from "@/components/ui/separator"
/* import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar" */

export default function Page() {

    return (
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="aspect-video rounded-xl bg-gray-300 dark:bg-neutral-800/50 flex justify-center items-end">
                    <a href="/dashboard/dashboard-profile" className="text-3xl py-5 px-8 bg-vecino rounded-2xl hover:bg-orange-600">Ver mas</a>
                </div>
                <div className="aspect-video rounded-xl bg-gray-300 dark:bg-neutral-800/50" />
                <div className="aspect-video rounded-xl bg-gray-300 dark:bg-neutral-800/50" />
            </div>
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="aspect-video rounded-xl bg-gray-300 dark:bg-neutral-800/50" />
                <div className="aspect-video rounded-xl bg-gray-300 dark:bg-neutral-800/50" />
                <div className="aspect-video rounded-xl bg-gray-300 dark:bg-neutral-800/50" />
            </div>
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="aspect-video rounded-xl bg-gray-300 dark:bg-neutral-800/50" />
                <div className="aspect-video rounded-xl bg-gray-300 dark:bg-neutral-800/50" />
                <div className="aspect-video rounded-xl bg-gray-300 dark:bg-neutral-800/50" />
            </div>
        </div>
    )
}