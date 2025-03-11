'use client'
import { useEffect, useState } from "react";
import  Swal  from "sweetalert2"
import { insertService, getUserService } from "@/lib/auth-actions";
import { redirect } from "next/navigation";
import { useUser } from "@/app/context";


export default function OfrecerPage(){

    const { setUserData, nombre, telefono, nom_serv, tarifa, disponibilidad, descripcion, experiencia } = useUser();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        nombre: "",
        telefono: "",
        nom_serv: "",
        tarifa: "",
        disponibilidad: "",
        descripcion: "",
        experiencia: "",
    });

    useEffect(() => { //Al cargar la pagina intentamos traer el servicio de usuario.
            async function fetchExistingService(){
                const result = await getUserService()
                console.log(result)
                if(result.status === 'success' && result.data){
                    //Actualizamos el contexto con los datos del servicio.
                    setUserData(result.data)
                }
            }
            fetchExistingService()
    }, []) //Lo montamos solo una vez []

    // Si el contexto ya tiene datos (es decir, ya existe un servicio) inicializamos el formulario con ellos.
    useEffect(() => {
        if(nom_serv){
            setFormData({
                nombre,
                telefono,
                nom_serv,
                tarifa,
                disponibilidad,
                descripcion,
                experiencia,
            });
        }
    }, [nombre, telefono, nom_serv, tarifa, disponibilidad, descripcion, experiencia])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { 
        const { id, value } = e.target; // Se destructura para obtener el id y el valor del e.target, en este caso, del input.

        if (id === "telefono" && value.length > 9) return;
        if (id === "nom_serv" && value.length > 50) return;
        if (id === "tarifa" && value.length > 75) return;
        if (id === "disponibilidad" && value.length > 100) return;
        if (id === "descripcion" && value.length > 250) return;
        if (id === "experiencia" && value.length > 250) return;

        setFormData((prev) => ({ // Se preserva el estado anterior y se actualiza el valor del input modificado.
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => { //Los "e", hacen referencia evento que general el usuario.
        e.preventDefault();
        setLoading(true);

        const data = new FormData();                            //Ahora data contiene los mismos datos que formData
        Object.entries(formData).forEach(([key, value]) => {    //Pero en un formato adecuado para enviarlo en una petición HTTP.
            data.append(key, value);
        });

        const response = await insertService(data); //Enviamos los datos al backend con el formato adecuado.

        if (response.status === "success") {
            //Actualizamos el contexto con lo registrado.
            setUserData(formData);
            Swal.fire({
                icon: "success",
                title: "¡Servicio registrado!",
                text: "Su servicio ha sido registrado correctamente. Lo redirigiremos a su perfil",
                confirmButtonText: "Ok",
                confirmButtonColor: "#ff6c04",
            });
            return redirect("/dashboard/dashboard-my-profile")
        } else {
            console.log("Respuesta del servidor:", response);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: response.message || "Ocurrió un error al registrar el servicio.",
                confirmButtonColor: "#d33",
            });
        }

        setLoading(false);
    };

    return(
            <div className="bg-white border p-5 border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-900 transition-all duration-200 ease-in-out">
                <div className="flex justify-center">
                    <h1 className="dark:text-white text-3xl font-semibold mb-7 ">Completa los datos para ofrecer tus servicios</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre (Este nombre se utilizará para dar a conocer sus servicios, puede ser un apodo)</label>
                            <input value={formData.nombre} onChange={handleChange} type="text" id="nombre" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Titor" required />
                        </div>
                        <div>
                            <label htmlFor="nom_serv" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre del Servicio</label>
                            <input value={formData.nom_serv} onChange={handleChange} type="text" id="nom_serv" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Jardineria General" required />
                            <p className = {`text-sm mt-1 ml-1 ${formData.nom_serv.length === 50 ? "text-vecino"
                                                : formData.nom_serv.length > 50
                                                ? "text-red-500"
                                            : "text-gray-600 dark:text-gray-400"
                                        }`}
                                    >
                                        {formData.nom_serv.length}/50 caracteres
                                            </p>
                        </div>
                        <div>
                            <label htmlFor="telefono" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Teléfono</label>
                            <input value={formData.telefono} onChange={handleChange} type="tel" id="telefono" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="912345678" required />
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
                    </div>
                    <div className="mb-6">
                        <label htmlFor="descripcion" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripción su Servicio</label>
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
                        <label htmlFor="experiencia" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Experiencia de su Servicio (Opcional)</label>
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
                    <div className="flex flex-col md:flex-row gap-5">
                    <label
                        htmlFor="file-input"
                        className="text-white bg-vecino rounded-lg hover:bg-orange-700 focus:ring-2  dark:focus:ring-white focus:ring-darkbg focus:outline-none text-lg w-full lg:w-auto px-5 py-2.5 text-center transform hover:scale-105 hover:ease-out transition duration-300 cursor-pointer"
                        >
                        Agregar Foto de Perfil
                        </label>
                        <input
                        id="file-input"
                        type="file"
                        accept=".png,.jpg,.jpeg,.pdf"
                        className="hidden"
                        name="Archivo"
                        />
                        {/* TODO HACER QUE AL PRESIONAR CAMBIE EL COLOR CUANDO EL loading ES true */}
                        <button type="submit" className="text-white bg-vecino rounded-lg hover:bg-orange-700 focus:ring-2  dark:focus:ring-white focus:ring-darkbg focus:outline-none text-lg w-full lg:w-auto px-5 py-2.5 text-center transform hover:scale-105 hover:ease-out transition duration-300"
                        disabled={loading}
                        >{loading ? "Publicando sus Servicios..." : "Publicar mis Servicios"}</button>
                    </div>
                </form>
            </div>
    )
}


