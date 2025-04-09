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
import SearchBar from "@/components/dashboard-components/search-bar";




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
                        
                        <SearchBar/>

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