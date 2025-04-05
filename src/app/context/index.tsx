'use client'

import React, { createContext, useState, ReactNode, useContext, useEffect } from "react";
import { getUserService } from "@/lib/auth-actions";

type UserData = { //Tipamos los datos del usuario.
    nombre: string
    telefono: string
    nom_serv: string
    tarifa: string
    disponibilidad: string
    descripcion: string
    experiencia: string
    foto: string
};

type UserContextType = UserData & { //UserContextType es la estructura del contexto, que incluye los datos del usuario y la función para actualizarlos, la cual es opcional.
    setUserData: (data: Partial<UserData>) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined); // Se crea el contexto. Se inicializa como undefined pq al comienzo puede estar vacio.

type Props = {
    children: ReactNode;
};
const defaultUserData: UserData = { //Se encarga de manejar y distribuir los datos del usuario.
    nombre: "",
    telefono: "",
    nom_serv: "",
    tarifa: "",
    disponibilidad: "",
    descripcion: "",
    experiencia: "",
    foto: ""
};

export const UserProvider = ({ children }: Props) => { //UserProvider es el componente que provee el contexto.
    const [userData, setUserDataState] = useState<UserData>(defaultUserData); //Para manejar el estado del usuario.

    /*Con este useEffect obtenemos los datos del servicio del usuario de la BBDD.
    De esta forma siempre consulta a la BBDD al montar el contexto.*/
    useEffect(() => {
        async function fetchUserData() {
            const result = await getUserService();
            if (result.status === "success" && result.data) {
                setUserDataState(prev => ({ ...prev, ...result.data }));
            }
        }
        fetchUserData();
    }, []);

    const setUserData = (data: Partial<UserData>) => { //Actualiza los campos del usuario, sin modificar los que no se pasen.
        setUserDataState(prev => ({
        ...prev,
        ...data,
        }));
    };

    //Se pasa el estado userData y la función setUserData dentro del Provider
    //Para que todos los componentes hijos puedan acceder a ellos.
    return (
        <UserContext.Provider value={{ ...userData, setUserData }}> 
            {children}
        </UserContext.Provider>
    );
};

export const useUser = (): UserContextType => { //Custom hook para acceder al contexto.
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};
