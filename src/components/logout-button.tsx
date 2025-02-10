"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { signout } from "@/lib/auth-actions"; 
import { createClient } from "@/utils/supabase/client";
import { LogOut } from "lucide-react";
import { useSidebar } from "./ui/sidebar";
import Swal from "sweetalert2";

const LogoutButton = () => {
    const [user, setUser] = useState<{ id: string; email: string } | null>(null);
    const supabase = createClient();

    const { state } = useSidebar()

    useEffect(() => {
        const fetchUser = async () => {
            const {
                data: { user },
            } = await supabase.auth.getUser();
            setUser(user ? { id: user.id, email: user.email ?? "" } : null);
        };
        fetchUser();
    }, []);

    if (!user) return null; // Si no hay usuario logueado, no se muestra nada

    const handleLogoutAlert = async () => {
        const result = await Swal.fire({
            title: "Cerrar Sesión",
            text: "¿Estás seguro que deseas cerrar sesión?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Sí, cerrar sesión",
            cancelButtonText: "Cancelar",
            confirmButtonColor: "#ff6c04",
        })

        if(result.isConfirmed){
            await Swal.fire({
                title: "Sesión cerrada",
                text: "Has cerrado sesión correctamente",
                icon: "success",
                confirmButtonColor: "#ff6c04",
                timer: 5000,
            })
            await signout()
            setUser(null)
        }
    }


    return (
        <div className="px-2 py-5">
            <Button
                onClick={handleLogoutAlert}
                className="group/collapsible flex w-full items-center justify-start gap-1 rounded-md h-16 px-2 dark:bg-gray-900 dark:text-white text-xl text-gray-700 bg-gray-50 hover:!bg-orange-500 hover:!text-white"
            >
                <LogOut/>
                {state === "expanded" && <span>Cerrar Sesion</span>}
                </Button>
        </div>
    );
};

export default LogoutButton;