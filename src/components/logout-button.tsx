"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { signout } from "@/lib/auth-actions"; 
import { createClient } from "@/utils/supabase/client";
import { LogOut } from "lucide-react";

const LogoutButton = () => {
    const [user, setUser] = useState<{ id: string; email: string } | null>(null);
    const supabase = createClient();

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

    return (
        <div className="px-2 py-5">
            <Button
                onClick={() => {
                    signout(); // Cierra sesión
                    setUser(null); // Actualiza el estado del usuario a null
                }}
                className="flex w-full items-center justify-start gap-1 rounded-md h-16 px-2 dark:bg-gray-900 dark:text-white text-xl text-gray-700 bg-gray-50 hover:!bg-orange-500 hover:!text-white"
            >
                <LogOut/>
                Cerrar Sesión
            </Button>
        </div>
    );
};

export default LogoutButton;