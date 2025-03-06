'use client'

import React, { createContext, useState, ReactNode, useContext, useEffect } from "react";

type UserData = {
    nombre: string
    telefono: string
    nom_serv: string
    tarifa: string
    disponibilidad: string
    descripcion: string
    experiencia: string
};

type UserContextType = UserData & {
    setUserData: (data: Partial<UserData>) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

type Props = {
    children: ReactNode;
};

export const UserProvider = ({ children }: Props) => {
    const defaultUserData: UserData = {
        nombre: "",
        telefono: "",
        nom_serv: "",
        tarifa: "",
        disponibilidad: "",
        descripcion: "",
        experiencia: "",
    };

    const [userData, setUserDataState] = useState<UserData>(defaultUserData);

    useEffect(() => {
        const storedData = localStorage.getItem("userData");
        if(storedData){
            try{
                setUserDataState(JSON.parse(storedData));
            }catch(e){
                console.error("Error parsing user data", e);
            }
        }
    },[])

    useEffect(() => {
        localStorage.setItem("userData", JSON.stringify(userData));
    }, [userData]);


    const setUserData = (data: Partial<UserData>) => {
        setUserDataState(prev => ({
        ...prev,
        ...data,
        }));
    };

    return (
        <UserContext.Provider value={{ ...userData, setUserData }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};
