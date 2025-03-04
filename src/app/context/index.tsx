'use client'

import React, { createContext, useState, ReactNode, useContext } from "react";

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
    const [userData, setUserDataState] = useState<UserData>({
        nombre: "",
        telefono: "",
        nom_serv: "",
        tarifa: "",
        disponibilidad: "",
        descripcion: "",
        experiencia: "",
    });

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
