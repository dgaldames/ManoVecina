'use client'

import { useEffect, useState } from "react"
import UserCard from "@/components/dashboard-components/user-card"
import { createClient } from "@/utils/supabase/client"

// Hook de servicios integrado en este archivo para simplificar la vista
function useServices() {
    interface Service {
        id: string;
        nombre: string;
        nom_serv: string;
        descripcion: string;
        foto?: string;
    }

    const [myServices, setMyServices] = useState<Service[]>([])

    // Función que obtiene los servicios paginados y retorna el total de items
    const getServices = async (currentPage: number, itemsPerPage: number): Promise<number> => {
        const supabase = createClient();
        const offset = (currentPage - 1) * itemsPerPage;

        // Seleccionamos los registros con count exacto para calcular el total
        const { data, error, count } = await supabase
            .from('servicios_persona')
            .select('*', { count: 'exact' })
            .range(offset, offset + itemsPerPage - 1);

        if (error) {
            console.error("Error fetching services: ", error);
            return 0;
        }
        setMyServices(data || []);
        return count || 0;
    };

    return { myServices, getServices }
}

export default function Page() {

    const { myServices, getServices } = useServices()
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const itemsPerPage = 2 ; // Por el momento 3 items por página

    useEffect(() => {
        setLoading(true)
        getServices(currentPage, itemsPerPage)
            .then((totalItems: number) => {
                setTotalPages(Math.ceil(totalItems / itemsPerPage))
                setLoading(false)
            })
    }, [currentPage])

    if(loading){
        return (
            <div className="flex flex-col items-center justify-center h-full py-20">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-vecino dark:border-orange-500"></div>
                <p className="mt-6 text-xl font-semibold text-gray-700 dark:text-gray-300">Cargando servicios...</p>
            </div>
        );
    }

    return (
        <div>
            <div className="grid auto-rows-min md:grid-cols-3 gap-4 p-4 pt-0">
                {myServices.map((service) => (
                    <UserCard
                        key={service.id}
                        userId={service.id}
                        userName={service.nombre}
                        userService={service.nom_serv}
                        userDetails={service.descripcion}
                        userImage={service.foto ? service.foto : "/dashboard-imgs/User_pfp_3.jpg"}
                    />
                ))}
            </div>
            <div className="flex justify-center items-center gap-4 mt-4">
                <button 
                    disabled={currentPage === 1} 
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                    className="px-4 py-2 bg-vecino text-white rounded-lg disabled:opacity-50 text-lg transform hover:scale-105 hover:ease-out transition duration-300"
                >
                    Anterior
                </button>
                <span className="dark:text-gray-100 text-lg">{currentPage} de {totalPages}</span>
                <button 
                    disabled={currentPage === totalPages} 
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    className="px-4 py-2 bg-vecino text-white rounded-lg disabled:opacity-50 text-lg transform hover:scale-105 hover:ease-out transition duration-300"
                >
                    Siguiente
                </button>
            </div>
        </div>
    )
}