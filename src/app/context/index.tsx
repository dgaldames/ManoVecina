'use client'

import React, { createContext, useState, ReactNode, useContext } from "react";

type UserData = { //Tipamos los datos del usuario.
    nombre: string
    telefono: string
    nom_serv: string
    tarifa: string
    disponibilidad: string
    descripcion: string
    experiencia: string
};

type UserContextType = UserData & { //UserContextType es la estructura del contexto, que incluye los datos del usuario y la función para actualizarlos, la cual es opcional.
    setUserData: (data: Partial<UserData>) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined); // Se crea el contexto. Se inicializa como undefined pq al comienzo puede estar vacio.

type Props = {
    children: ReactNode;
};

export const UserProvider = ({ children }: Props) => { //UserProvider es el componente que provee el contexto.
    const defaultUserData: UserData = {                //Se encarga de manejar y distribuir los datos del usuario.
        nombre: "",
        telefono: "",
        nom_serv: "",
        tarifa: "",
        disponibilidad: "",
        descripcion: "",
        experiencia: "",
    };

    const [userData, setUserDataState] = useState<UserData>(defaultUserData); //Para manejar el estado del usuario.

/*     useEffect(() => {                                 //Busca si hay datos en el localStorage una vez y los carga
        const storedData = localStorage.getItem("userData");
        if(storedData){
            try{
                setUserDataState(JSON.parse(storedData));
            }catch(e){
                console.error("Error parsing user data", e);
            }
        }
    },[]) */

/*     useEffect(() => { //Se guarda en el localStorage cada vez que se actualiza el estado del usuario.
        localStorage.setItem("userData", JSON.stringify(userData));
    }, [userData]); */


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
