'use client'
import { useEffect, useState, useRef } from "react";
import  Swal  from "sweetalert2"
import { updateService, deleteService } from "@/lib/auth-actions";
import { useRouter  } from "next/navigation";
import { useUser } from "@/app/context";
import { createClient } from "@/utils/supabase/client";
//import Image from "next/image";

//TODO, VER ALGUNA FORMA DE MOSTRAR LA IMAGEN EN LOS CAMPOS DE EDITAR.


export default function EditPage(){

    const { setUserData, nombre, telefono, nom_serv, tarifa, disponibilidad, descripcion, experiencia } = useUser();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [loadingDelete, setLoadingDelete] = useState(false);
    const [formData, setFormData] = useState({
        nombre: "",
        telefono: "",
        nom_serv: "",
        tarifa: "",
        disponibilidad: "",
        descripcion: "",
        experiencia: "",
    });
    const [file, setFile] = useState<File | null>(null); // Estado para manejar el archivo de la foto.
    const [isDirty, setIsDirty] = useState(false)
    const initialFormData = useRef(formData);

    // Si el contexto ya tiene datos (es decir, ya existe un servicio) inicializamos el formulario con ellos.
    useEffect(() => {
        if(nom_serv){
            const data = {
                nombre,
                telefono,
                nom_serv,
                tarifa,
                disponibilidad,
                descripcion,
                experiencia,
        
            };
            setFormData(data);
            initialFormData.current = data;
        }
    }, [nombre, telefono, nom_serv, tarifa, disponibilidad, descripcion, experiencia]);

    // Cada vez que cambia el formulario, comparamos con el estado inicial para ver si hay cambios
    useEffect(() => {
        const formChanged = JSON.stringify(formData) !== JSON.stringify(initialFormData.current);
        setIsDirty(formChanged || !!file);
    }, [formData, file]);

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

        // Manejador para el input de archivo de la foto
        const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.files && e.target.files[0]) {
                setFile(e.target.files[0]);
            }
        };

const handleDeleteService = async () => {
    const result = await Swal.fire({
        title: "Eliminar Servicio",
        text: "¿Estas seguro que deseas eliminar tu servicio?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Sí, Eliminar Servicio",
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#ff6c04",
    })
    
    if(result.isConfirmed){
        setLoadingDelete(true)
        await Swal.fire({
            title: "Servicio Eliminado",
            text: "Has eliminado tu servicio correctamente",
            icon: "success",
            confirmButtonColor: "#ff6c04",
            timer: 3000,
        })
        await deleteService()
        setUserData({}) //Ya que no se puede poner null, le ponemos un objeto vacío.
        window.location.reload()            //Window.location for the win CTM, el unico que sirve.
        window.location.href = "/dashboard"
    }else{
        setLoadingDelete(false);
    }
}

const handleSubmit = async (e: React.FormEvent) => { //Los "e", hacen referencia evento que general el usuario.
    e.preventDefault();
    setLoading(true);


    const supabase = createClient(); //Creamos el cliente de supabase para poder subir la foto.
    let fotoUrl = ""; //Inicializamos la variable foto como vacia.

    // Si se seleccionó una nueva imagen, se sube al bucket y se obtiene la URL
    if(file){
        const fileName = `${Date.now()}-${file.name}`;
        const { data: uploadData, error: uploadError } = await supabase.storage
            .from("pfpusuarios")
            .upload(`perfil/${fileName}`, file);
        if (uploadError) {
            Swal.fire({
                icon: "error",
                title: "Error al subir la imagen",
                text: uploadError.message,
            });
            setLoading(false);
            return;
        }
        const { data: publicData } = supabase.storage
            .from("pfpusuarios")
            .getPublicUrl(uploadData.path);
        if (!publicData.publicUrl) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "No se pudo obtener la URL de la imagen",
            });
            setLoading(false);
            return;
        }
        fotoUrl = publicData.publicUrl;
        console.log("URL de la imagen:", fotoUrl);
    }

    const dataPayload = new FormData();                            //Ahora data contiene los mismos datos que formData
    Object.entries(formData).forEach(([key, value]) => {    //Pero en un formato adecuado para enviarlo en una petición HTTP.
        dataPayload.append(key, value);
    });
    if(fotoUrl){  // Solo se agrega si se obtuvo una URL de imagen.
        dataPayload.append("foto", fotoUrl);
    }

    const response = await updateService(dataPayload); //Enviamos los datos al backend con el formato adecuado.

    if (response.status === "success") {
        //Actualizamos el contexto con lo registrado.
        setUserData(formData);
        await Swal.fire({
            icon: "success",
            title: "¡Servicio modificado!",
            text: "Su servicio ha sido editado correctamente. Lo redirigiremos a su perfil.",
            confirmButtonText: "Ok",
            confirmButtonColor: "#ff6c04",
            timer: 3000,
        });
        router.push('/dashboard/dashboard-my-profile')
    } else {
        console.log("Respuesta del servidor:", response);
        Swal.fire({
            icon: "error",
            title: "Error",
            text: response.message || "Ocurrió un error al modificar el servicio.",
            confirmButtonColor: "#d33",
        });
    }
    setLoading(false);
}

    return(
            <div className="bg-white border p-5 border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-900 transition-all duration-200 ease-in-out">
                <div className="flex justify-center">
                    <h1 className="dark:text-white text-3xl font-semibold mb-7 ">Edita los campos para modificar tu servicio</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre (Este nombre se utilizará para dar a conocer sus servicios, puede ser un apodo)</label>
                            <input value={formData.nombre} onChange={handleChange} type="text" id="nombre" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Titor" required />
                            {/* Se deshabilita el campo si ya existe un nombre */}
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
                            <input value={formData.telefono} onChange={handleChange} type="tel" minLength={9} maxLength={9} pattern="[0-9]+" id="telefono" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="912345678" required />
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
                        <input value={formData.experiencia} onChange={handleChange} type="text" id="experiencia" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Cuento con mas de 10 anhos en el rubro..."/>
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
                        Editar Foto de Perfil
                        </label>
                        <input
                        id="file-input"
                        type="file"
                        accept=".png,.jpg,.jpeg"
                        className="hidden"
                        name="Archivo"
                        onChange={handleFileChange} // Cambiamos el manejador de eventos para el input de archivo
                        />
                        {/* TODO HACER QUE AL PRESIONAR CAMBIE EL COLOR CUANDO EL loading ES true */}
                        <button
                            type="submit"
                            className="text-white bg-vecino rounded-lg hover:bg-orange-700 focus:ring-2 dark:focus:ring-white focus:ring-darkbg focus:outline-none text-lg w-full lg:w-auto px-5 py-2.5 text-center transform hover:scale-105 hover:ease-out transition duration-300"
                            disabled={loading || !isDirty}>
                            {loading ? "Modificando sus Servicios..." : "Guardar Cambios"}
                        </button>
                        <button
                            type="button"
                            onClick={handleDeleteService}
                            className="text-white bg-vecino rounded-lg hover:bg-orange-700 focus:ring-2 dark:focus:ring-white focus:ring-darkbg focus:outline-none text-lg w-full lg:w-auto px-5 py-2.5 text-center transform hover:scale-105 hover:ease-out transition duration-300"
                            >
                            {loadingDelete ? "Eliminando su Servicio..." : "Eliminar mi Servicio"}
                        </button>

                    </div>
                    <p className="text-sm mt-2 ml-1 text-gray-600 dark:text-gray-400">Sube una imagen en formato PNG, JPG o JPEG. <br /> La imagen puede tardar unos minutos en actualizar.</p>
                </form>
            </div>
    )
}
