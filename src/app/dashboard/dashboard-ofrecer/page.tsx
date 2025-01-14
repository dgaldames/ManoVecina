'use client'
import { useState } from "react";


export default function OfrecerPage(){

    const [formData, setFormData] = useState({
        telefono: "",
        nombre_servicio: "",
        tarifa: "",
        disponibilidad: "",
        descripcion: "",
        experiencia: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target

        if(id === "telefono" && value.length > 9) return
        if(id === "nombre_servicio" && value.length > 50) return
        if(id === "tarifa" && value.length > 75) return
        if(id === "disponibilidad" && value.length > 100) return
        if(id === "descripcion" && value.length > 250) return
        if(id === "experiencia" && value.length > 250) return

        setFormData((prev) => ({
            ...prev,
            [id]: value
        }))
    }

    return(
            <div className="bg-white border p-5 border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-900 transition-all duration-200 ease-in-out">
                <div className="flex justify-center">
                    <h1 className="dark:text-white text-3xl font-semibold mb-7 ">Completa los datos para ofrecer tus servicios</h1>
                </div>
                <form>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div className="mb-0">
                            <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                            <input type="text" id="nombre" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Titor" required />
                        </div>
                        <div>
                            <label htmlFor="telefono" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefono</label>
                            <input value={formData.telefono} onChange={handleChange} type="tel" id="telefono" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="912345678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                            <p
                                className={`mt-1 text-sm ml-1 ${
                                    formData.telefono.length === 9 ? "text-vecino"
                                        : formData.telefono.length > 9
                                        ? "text-red-500"
                                        : "text-gray-600 dark:text-gray-400"
                                }`}
                            >
                                {formData.telefono.length}/9 caracteres
                            </p>
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo</label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.titor@gmail.com" required />
                        </div> 
                        <div>
                            <label htmlFor="nombre_servicio" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre del Servicio</label>
                            <input value={formData.nombre_servicio} onChange={handleChange} type="text" id="nombre_servicio" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Jardineria General" required />
                            <p className = {`text-sm mt-1 ml-1 ${formData.nombre_servicio.length === 50 ? "text-vecino"
                                                : formData.nombre_servicio.length > 50
                                                ? "text-red-500"
                                            : "text-gray-600 dark:text-gray-400"
                                        }`}
                                    >
                                        {formData.nombre_servicio.length}/50 caracteres
                                            </p>
                        </div>
                        <div>
                            <label htmlFor="tarifa" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tarifa por Servicio</label>
                            <input value={formData.tarifa} onChange={handleChange} type="text" id="tarifa" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$10.000 - $15.000" required />
                            <p className = {`text-sm mt-1 ml-1 ${formData.tarifa.length === 75 ? "text-vecino"
                                                : formData.tarifa.length > 75
                                                ? "text-red-500"
                                            : "text-gray-600 dark:text-gray-400"
                                        }`}
                                    >
                                        {formData.tarifa.length}/75 caracteres
                                            </p>
                        </div>  
                        <div>
                            <label htmlFor="disponibilidad" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Disponibilidad Horaria</label>
                            <input value={formData.disponibilidad} onChange={handleChange} type="text" id="disponibilidad" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Lunes a Viernes de 10:00 a 15:00" required />
                            <p className = {`text-sm mt-1 ml-1 ${formData.disponibilidad.length === 100 ? "text-vecino"
                                                : formData.disponibilidad.length > 100
                                                ? "text-red-500"
                                            : "text-gray-600 dark:text-gray-400"
                                        }`}
                                    >
                                        {formData.disponibilidad.length}/100 caracteres
                                            </p>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="descripcion" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripcion su Servicio</label>
                        <input value={formData.descripcion} onChange={handleChange} type="text" id="descripcion" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Me especializo en la poda de arbustos y tala de arboles..." required />
                        <p className = {`text-sm mt-1 ml-1 ${formData.descripcion.length === 250 ? "text-vecino"
                                                : formData.descripcion.length > 250
                                                ? "text-red-500"
                                            : "text-gray-600 dark:text-gray-400"
                                        }`}
                                    >
                                        {formData.descripcion.length}/250 caracteres
                                            </p>
                    </div>
                    <p></p>
                    <div className="mb-6">
                        <label htmlFor="experiencia" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Experiencia de su Servicio</label>
                        <input value={formData.experiencia} onChange={handleChange} type="text" id="experiencia" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Cuento con mas de 10 anhos en el rubro..." required />
                        <p className = {`text-sm mt-1 ml-1 ${formData.experiencia.length === 250 ? "text-vecino"
                                                : formData.experiencia.length > 250
                                                ? "text-red-500"
                                            : "text-gray-600 dark:text-gray-400"
                                        }`}
                                    >
                                        {formData.experiencia.length}/250 caracteres
                                            </p>
                    </div> 
                    <button type="submit" className="text-white bg-vecino rounded-lg hover:bg-orange-600 focus:ring-2  dark:focus:ring-white focus:ring-darkbg focus:outline-none text-lg w-full lg:w-auto px-5 py-2.5 text-center">Publicar mis Servicios</button>
                </form>
            </div>
    )
}


