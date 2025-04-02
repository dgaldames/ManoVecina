"use client";
import { createClient } from "@/utils/supabase/client";
import React, { useEffect, useState } from "react";

const UserGreetText = () => {
    const [user, setUser] = useState<{ id: string; email: string } | null>(null);
    const [serviceName, setServiceName] = useState<string | null>(null);
    const supabase = createClient();
    useEffect(() => {
        const fetchUser = async () => {
            const {
                data: { user },
            } = await supabase.auth.getUser();
            
            if(user){
                const { data: serviceData, error } = await supabase
                .from("servicios_persona")
                .select("nombre")
                .eq("user_id", user.id) //Puede dar un error
                .single();
                
                if(!error && serviceData && serviceData.nombre){
                    setServiceName(serviceData.nombre);
                }
                
                setUser({ id: user.id, email: user.email ?? "" });
            }
        };
        fetchUser();
    }, []);

        if (user !== null) {
            return (
                <p>Hola! &nbsp;
                    <code>{serviceName ?? user.email}</code>
                </p>
            );
        }
    return null;
};

export default UserGreetText;