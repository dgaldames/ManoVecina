import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"

export default function SupportPage() {
    return (
        <main className="bg-neutral-50 py-12 px-6 mb-28 rounded-xl dark:bg-gray-800" id="contacto-soporte">
            <div className="grid md:grid-cols-1 max-w-7xl mx-auto">
                <div className="pb-8">
                    <h1 className="text-gray-800 md:text-5xl text-4xl font-bold pb-6 dark:text-white">Soporte</h1>
                    <p className="text-gray-800 text-xl leading-relaxed dark:text-white">Si tienes algún problema técnico, duda o sugerencia, no dudes en ponerte en contacto con nuestro equipo de soporte. Completa el siguiente formulario y te responderemos lo antes posible.</p>
                </div>

                <div>    
                    <form className="space-y-4 max-w-7xl mx-auto p-6 rounded-xl bg-neutral-100 shadow-lg dark:bg-gray-900"
                            action="https://formsubmit.co/6e9120c171cae3372a22eaedbcbe306b" method="POST"
                            encType="multipart/form-data">
                        <h2 className="md:text-4xl text-3xl text-gray-800 font-bold text-center mb-6 dark:text-white">Contacto</h2>

                    <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                        {/* Nombre */}
                        <div>
                            <label className="block mb-1 font-semibold text-gray-800 dark:text-white">Nombre</label>
                            <input 
                            type="text" 
                            placeholder="Ej. Juan Pérez" 
                            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 focus:invalid:ring-red-300 focus:invalid:border-red-500 invalid:border-red-500" 
                            required
                            name="nombre-soporte"
                            />
                        </div>

                        {/* Correo Electrónico */}
                        <div>
                            <label className="block mb-1 font-semibold text-gray-800 dark:text-white">Correo Electrónico</label>
                            <input 
                            type="email" 
                            placeholder="ejemplo@correo.com" 
                            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 focus:invalid:ring-red-300 focus:invalid:border-red-500 invalid:border-red-500" 
                            required
                            name="correo-soporte"
                            />
                        </div>

                        {/* Categoría */}
                        <div>
                            <label htmlFor="motivo-soporte" className="block mb-1 font-semibold text-gray-800 dark:text-white">
                                Motivo del Contacto
                            </label>
                            <Select name="motivo-soporte" required>
                                <SelectTrigger id="motivo-soporte" className="text-gray-900 dark:bg-white font-semibold text-sm bg-white  !py-5 rounded-lg">
                                    <SelectValue placeholder="Selecciona una opción" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem className="text-gray-950 font-semibold py-3" value="duda-soporte">Duda</SelectItem>
                                    <SelectItem className="text-gray-950 font-semibold py-3" value="sugerencia-soporte">Sugerencia</SelectItem>
                                    <SelectItem className="text-gray-950 font-semibold py-3" value="reclamo-soporte">Reclamo</SelectItem>
                                    <SelectItem className="text-gray-950 font-semibold py-3" value="falla-soporte">Notificar una falla</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Archivo Opcional */}
                        <div>
                            <label className="block mb-1 font-semibold text-gray-800 dark:text-white">Adjuntar Archivo (opcional)</label>
                            <div className="relative w-full">
                                <label
                                htmlFor="file-input"
                                className="w-52 flex items-center justify-center font-semibold bg-vecino text-white hover:bg-orange-600 p-2 rounded-lg cursor-pointer hover:ease-in-out transition duration-300 transform hover:scale-105"
                                >
                                Seleccionar archivo
                                </label>
                                <input
                                id="file-input-soporte"
                                type="file"
                                accept=".png,.jpg,.jpeg,.pdf"
                                className="hidden"
                                name="archivo-soporte"
                                />
                            </div>
                        </div>
                    </div>
                        {/* Mensaje */}
                        <div>
                            <label className="block mb-1 font-semibold text-gray-800 dark:text-white">Mensaje</label>
                            <textarea 
                            placeholder="Cuéntanos más.." 
                            rows={3}
                            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400" 
                            name="mensaje-soporte"
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

            <Separator orientation="horizontal" className="h-min bg-slate-500 dark:bg-white my-10" />

            <main className="mb-44 py-12 px-6 bg-neutral-100 rounded-xl dark:bg-gray-900 shadow-lg" id="faq-soporte">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 grid-cols-1 md:gap-28 gap-12">
                    <div>
                        <h1 className="md:text-5xl text-4xl font-bold text-gray-800 dark:text-white pb-6">Preguntas Frecuentes</h1>
                        <p className="text-xl leading-relaxed text-gray-800 dark:text-white">En este apartado podras encontrar preguntas frecuentes que te pueden surgir relacionadas a la plataforma y sus funcionalidades.</p>
                    </div>
                    <div>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger 
                                    className="text-3xl dark:text-white hover:underline decoration-2 underline-offset-8">Lorem ipsum 1?
                                </AccordionTrigger>
                                <AccordionContent className="text-xl dark:text-white">
                                    dolor sit amet consectetur adipisicing elit. Quos ullam rem laboriosam tenetur ipsa, quas ipsum eum iste itaque dolore consequuntur excepturi sit hic, ad eligendi! Error inventore earum nam.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2">
                                <AccordionTrigger 
                                    className="dark:text-white text-3xl hover:underline decoration-2 underline-offset-8">Lorem ipsum 2?
                                </AccordionTrigger>

                                <AccordionContent className="text-xl dark:text-white">
                                    dolor sit amet consectetur adipisicing elit. Quos ullam rem laboriosam tenetur ipsa, quas ipsum eum iste itaque dolore consequuntur excepturi sit hic, ad eligendi! Error inventore earum nam!?
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger 
                                    className="dark:text-white text-3xl hover:underline decoration-2 underline-offset-8">Lorem ipsum 3?
                                </AccordionTrigger>

                                <AccordionContent className="text-xl dark:text-white">
                                    dolor sit amet consectetur adipisicing elit. Quos ullam rem laboriosam tenetur ipsa, quas ipsum eum iste itaque dolore consequuntur excepturi sit hic, ad eligendi! Error inventore earum nam!?
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </main>
        </main>

    
    )
}