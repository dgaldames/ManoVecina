'use client'


import React from "react";
//import { createClient } from "../utils/supabase/supabase-client";
import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {SidebarInset, SidebarProvider, SidebarTrigger,} from "@/components/ui/sidebar"
import { useState } from "react"
import SvgLuna from "../../../public/dashboard-icons/moon-svg";
import SvgSol from "../../../public/dashboard-icons/sun-svg";
import { UserProvider } from "../context";




const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
        const [darkMode, setDarkMode] = useState(false)

        const toggleDarkMode = () =>{
            setDarkMode(!darkMode)
        }
    
    return (
        <UserProvider>
            <SidebarProvider className={darkMode ? 'dark' : ''}>
            <AppSidebar />
                <SidebarInset>
                    <header className="flex justify-between h-28 shrink-0 items-center gap-2 transition-all duration-200 ease-in-out group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 bg-gray-200 dark:bg-gray-900 ">
                        <div className="flex items-center gap-2 pl-4">
                            <SidebarTrigger className="-ml-1 dark:bg-white" />
                            <Separator orientation="vertical" className="mr-2 h-8 dark:bg-white " />
                        </div>
                        <div>
                            <form action="#">
                                <input 
                                type="text" 
                                placeholder="Buscar en Vecindario" 
                                className="rounded-3xl md:w-96 w-52 border border-gray-300 p-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-800 hover:border-gray-400 transition-all duration-200 ease-in-out bg-gray-50 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 dark:placeholder-gray-400 dark:text-gray-200 dark:focus:ring-gray-200">
                                    
                                </input>
                            </form>
                        </div>

                        {darkMode ? (
                            <div className="mr-6">
                            <button onClick={toggleDarkMode}>
                                <SvgLuna />
                            </button>
                        </div>
                        ):(
                            <div className="mr-6">
                                <button onClick={toggleDarkMode}>
                                    <SvgSol />
                                </button>
                            </div>
                        )}
                    </header>

                    <div className="flex-1 bg-gray-200 p-4 dark:bg-gray-900 transition-all duration-200 ease-in-out">
                        {children} {/* Aca le paso el contenido de los page.tsx */}
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </UserProvider>
    );
};

export default DashboardLayout;