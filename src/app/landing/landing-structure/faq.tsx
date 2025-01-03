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
                                className="text-3xl hover:underline decoration-2 underline-offset-8">Lorem ipsum 1?
                            </AccordionTrigger>
                            <AccordionContent className="text-xl">
                                dolor sit amet consectetur adipisicing elit. Quos ullam rem laboriosam tenetur ipsa, quas ipsum eum iste itaque dolore consequuntur excepturi sit hic, ad eligendi! Error inventore earum nam.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger 
                                className="text-3xl hover:underline decoration-2 underline-offset-8">Lorem ipsum 2?
                            </AccordionTrigger>

                            <AccordionContent className="text-xl">
                                dolor sit amet consectetur adipisicing elit. Quos ullam rem laboriosam tenetur ipsa, quas ipsum eum iste itaque dolore consequuntur excepturi sit hic, ad eligendi! Error inventore earum nam!?
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger 
                                className="text-3xl hover:underline decoration-2 underline-offset-8">Lorem ipsum 3?
                            </AccordionTrigger>

                            <AccordionContent className="text-xl">
                                dolor sit amet consectetur adipisicing elit. Quos ullam rem laboriosam tenetur ipsa, quas ipsum eum iste itaque dolore consequuntur excepturi sit hic, ad eligendi! Error inventore earum nam!?
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </main>
    )
}