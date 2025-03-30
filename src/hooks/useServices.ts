'use client'

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";

export function useServices() {

    /* interface Service {
        // Replace these fields with the actual structure of your 'servicios_persona' table
        id: number;
        name: string;
        description: string;
    }

    const [myServices, setMyServices] = useState<Service[]>([]); */
    
    const [myServices, setMyServices] = useState<any[]>([]);

    const supabase = createClient();

    const getServices = async () => {
        const { data, error } = await supabase
            .from('servicios_persona')
            .select('*');
        if (error) {
            console.error('Error fetching services:', error);
        } else if (data) {
            setMyServices(data);
        }
    };

    const subscribeToServices = () => {
        const channel = supabase
            .channel('servicios_persona_changes')
            .on('postgres_changes', { 
                event: '*', 
                schema: 'public',
                table: 'servicios_persona' 
            },
            payload => {
                console.log("Evento realtime recibido: ", payload);
                // Actualiza el estado al recibir cambios en la tabla.
                getServices();
            })
            .subscribe();

        // Retornamos una función de limpieza para cancelar la suscripción si es necesario.
        return () => {
            supabase.removeChannel(channel);
        };
    };

    // (Opcional) Puedes inicializar la suscripción automáticamente con un useEffect dentro del hook.
    useEffect(() => {
        const unsubscribe = subscribeToServices();
        // Se ejecuta al desmontar el componente
        return () => {
            unsubscribe();
        };
    }, []);

    return { myServices, getServices, subscribeToServices };
}