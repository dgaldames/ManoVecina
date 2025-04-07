import {Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"

export default function Faq(){
    return(
        <main className="mb-44 py-12 px-6 bg-neutral-50" id="faq">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 grid-cols-1 md:gap-28 gap-12">
                <div>
                    <h1 className="md:text-5xl text-4xl font-bold text-gray-800 pb-6">Preguntas Frecuentes</h1>
                    <p className="text-xl leading-relaxed text-gray-800">En este apartado podras encontrar preguntas frecuentes que te pueden surgir relacionadas a la plataforma y sus funcionalidades.</p>
                </div>
                <div>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger 
                                className="text-3xl hover:text-vecino duration-200">¿Cómo me registro en ManoVecina?
                            </AccordionTrigger>
                            <AccordionContent className="text-xl">
                                Haz clic en el botón <strong> <a href="#btn-registrar"><span className="underline decoration-1 underline-offset-4 hover:text-vecino hover:decoration-transparent duration-200">Registrate de forma gratuita</span></a> </strong> para crear una cuenta, asegúrate de proporcionar una dirección de correo electrónico <strong>válida</strong>. Te llegara un <strong> correo de confirmación para activar tu cuenta. </strong>Una vez activada, deberas iniciar sesión y podrás crear tu perfil.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger 
                                className="text-3xl hover:text-vecino duration-200">¿Cómo ofrezco o contrato un servicio?
                            </AccordionTrigger>

                            <AccordionContent className="text-xl">
                                <strong>Una vez registrado podrás navegar </strong> por la plataforma y buscar servicios ofrecidos por otros usuarios. Si encuentras algo que te interese, puedes ponerte en contacto con el proveedor del servicio.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger 
                                className="text-3xl hover:text-vecino duration-200">¿ManoVecina tiene algún costo?
                            </AccordionTrigger>

                            <AccordionContent className="text-xl">
                                Nop, <strong>ManoVecina es completamente gratuita para todos los usuarios. </strong> No cobramos comisiones por los servicios ofrecidos o contratados, cualquier persona puede ofrecer o buscar servicios sin pagar nada.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger 
                                className="text-3xl hover:text-vecino duration-200">¿A quién está dirigida ManoVecina?
                            </AccordionTrigger>

                            <AccordionContent className="text-xl">
                                A <strong>vecinos de cualquier edad </strong> que quieran ofrecer o contratar servicios de manera rápida y sencilla. Ya sea que sepas reparar cosas, cortar pasto o que necesites un servicio específico.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger 
                                className="text-3xl hover:text-vecino duration-200">¿Como puedo aportar a ManoVecina?
                            </AccordionTrigger>

                            <AccordionContent className="text-xl">
                                Si deseas apoyar el proyecto, puedes hacerlo de forma voluntaria a través de una donación monetaria a la cuenta RUT: <strong> <span className="text-vecino">21.088.563-3</span></strong>.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </main>
    )
}