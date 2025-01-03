import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"



export default function Contacto(){
    return(
        <main className="bg-neutral-50 py-12 px-6 mb-28" id="contacto">
            <div className="grid md:grid-cols-1 max-w-7xl mx-auto">
                <div className="pb-8">
                    <h1 className="text-gray-800 md:text-5xl text-4xl font-bold pb-6">Contactanos</h1>
                    <p className="text-gray-800 text-xl leading-relaxed">¿Tienes preguntas, sugerencias o problemas técnicos? Nos encantaría escuchar tus comentarios. Contáctanos a través de nuestro formulario o envíanos un mensaje directo por nuestras redes sociales. También puedes escribirnos a correo@manovecina.com. Estamos aquí para ayudarte a mejorar tu experiencia en ManoVecina.</p>
                </div>

                <div>    
                    <form className="space-y-4 max-w-7xl mx-auto p-6 border rounded-md bg-neutral-100 shadow-lg"
                            action="https://formsubmit.co/6e9120c171cae3372a22eaedbcbe306b" method="POST"
                            encType="multipart/form-data">
                        <h2 className="md:text-4xl text-3xl text-gray-800 font-bold text-center mb-6">Contacto</h2>

                    <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                        {/* Nombre */}
                        <div>
                            <label className="block mb-1 font-semibold text-gray-800">Nombre</label>
                            <input 
                            type="text" 
                            placeholder="Ej. Juan Pérez" 
                            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 focus:invalid:ring-red-300 focus:invalid:border-red-500 invalid:border-red-500" 
                            required
                            name="Nombre"
                            />
                        </div>

                        {/* Correo Electrónico */}
                        <div>
                            <label className="block mb-1 font-semibold text-gray-800">Correo Electrónico</label>
                            <input 
                            type="email" 
                            placeholder="ejemplo@correo.com" 
                            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 focus:invalid:ring-red-300 focus:invalid:border-red-500 invalid:border-red-500" 
                            required
                            name="Correo"
                            />
                        </div>

                        {/* Categoría */}
                        <div>
                            <label htmlFor="motivo" className="block mb-1 font-semibold text-gray-800">
                                Motivo del Contacto
                            </label>
                            <Select name="Motivo" required>
                                <SelectTrigger id="motivo" className="text-gray-900 font-semibold text-sm bg-white !py-5 rounded-lg">
                                    <SelectValue placeholder="Selecciona una opción" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem className="text-gray-950 font-semibold py-3" value="duda">Duda</SelectItem>
                                    <SelectItem className="text-gray-950 font-semibold py-3" value="sugerencia">Sugerencia</SelectItem>
                                    <SelectItem className="text-gray-950 font-semibold py-3" value="reclamo">Reclamo</SelectItem>
                                    <SelectItem className="text-gray-950 font-semibold py-3" value="falla">Notificar una falla</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Archivo Opcional */}
                        <div>
                            <label className="block mb-1 font-semibold text-gray-800">Adjuntar Archivo (opcional)</label>
                            <div className="relative w-full">
                                <label
                                htmlFor="file-input"
                                className="w-52 flex items-center justify-center font-semibold bg-vecino text-white hover:bg-orange-600 p-2 rounded-lg cursor-pointer hover:ease-in-out transition duration-300 transform hover:scale-105"
                                >
                                Seleccionar archivo
                                </label>
                                <input
                                id="file-input"
                                type="file"
                                accept=".png,.jpg,.jpeg,.pdf"
                                className="hidden"
                                name="Archivo"
                                />
                            </div>
                        </div>
                    </div>
                        {/* Mensaje */}
                        <div>
                            <label className="block mb-1 font-semibold text-gray-800">Mensaje</label>
                            <textarea 
                            placeholder="Cuéntanos más.." 
                            rows={3}
                            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400" 
                            name="Mensaje"
                            required
                            ></textarea>
                        </div>

                        {/* Botón Enviar */}
                        <div className="flex justify-center">
                            <button 
                                type="submit" 
                                className="md:w-80 w-60 bg-vecino hover:bg-orange-600 text-white md:text-2xl text-xl font-medium p-2 rounded-2xl hover:ease-out transition duration-300 transform hover:scale-105">
                                Enviar mensaje
                            </button>
                        </div>

                        <input type="hidden" name="_next" value="http://localhost:3000" />
                        <input type="hidden" name="_captcha" value="false" />
                        
                    </form>
                </div>
            </div>
            
        </main>
    )
}