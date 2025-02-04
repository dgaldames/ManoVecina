'use client'

import {Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger} from "@/components/ui/drawer"
import { useMediaQuery } from "@/components/ui/use-media-query"
import Image from "next/image"
import SvgDrawerTrigger from "../../../../public/ladingns-icons/header/drawer-trigger"
import SvgDrawerClose from "../../../../public/ladingns-icons/header/drawer-close"



export default function Header(){

    const isDesktop = useMediaQuery("(min-width: 768px)")

    return(
        <main>
            <header className="py-6 px-10 flex items-center top-0 w-full justify-between bg-gray-50">
                <div className="flex flex-grow basis-0 w-auto h-auto">
                    <Image
                    src={'/landing-imgs/header/LogoFinalVersion.png'}
                    alt='Logo ManoVecina'
                    width={270}
                    height={220}
                    priority
                    />
                </div>
                
                {isDesktop ? (
                    <div>
                        <nav>
                            <ul className="flex md:text-xl [&>li>a]:inline-block [&>li>a]:px-8 [&>li>a]:py-2">
                                <li><a href="#" className="rounded-2xl hover:bg-gray-200 hover:text-black ease-out transition duration-200 transform hover:scale-105 ">Inicio</a></li>
                                <li><a href="#target" className="rounded-2xl hover:bg-gray-200 hover:text-black ease-out transition duration-200 transform hover:scale-105">Objetivo</a></li>
                                <li><a href="#funcionalidades" className="rounded-2xl hover:bg-gray-200 hover:text-black ease-out transition duration-200 transform hover:scale-105">Funcionalidades</a></li>
                                <li><a href="#faq" className="rounded-2xl hover:bg-gray-200 hover:text-black ease-out transition duration-200 transform hover:scale-105">FAQ</a></li>
                                <li><a href="#contacto" className="rounded-2xl hover:bg-gray-200 hover:text-black ease-out transition duration-200 transform hover:scale-105">Contacto</a></li>
                            </ul>
                        </nav>
                    </div>
                ):(
                <div>
                    <Drawer direction="right">
                        <DrawerTrigger>
                            <SvgDrawerTrigger />
                        </DrawerTrigger>
                        <DrawerContent>
                            <DrawerHeader>
                                <DrawerTitle>

                                </DrawerTitle>
                                <DrawerDescription>
                                    
                                </DrawerDescription>
                            </DrawerHeader>
                                <ul className="flex flex-col gap-4 mt-4">
                                    <li className="py-4 flex justify-center"><a href="#" className="text-2xl font-semibold">Inicio</a></li>
                                    <div className="p-medio bg-vecino"></div>
                                    <li className="py-4 flex justify-center"><a href="#target" className="text-2xl font-semibold">Objetivo</a></li>
                                    <div className="p-medio bg-vecino"></div>
                                    <li className="py-4 flex justify-center"><a href="#funcionalidades" className="text-2xl font-semibold">Funcionalidades</a></li>
                                    <div className="p-medio bg-vecino"></div>
                                    <li className="py-4 flex justify-center"><a href="#faq" className="text-2xl font-semibold">FAQ</a></li>
                                    <div className="p-medio bg-vecino"></div>
                                    <li className="py-4 flex justify-center"><a href="#contacto" className="text-2xl font-semibold">Contacto</a></li>
                                    <div className="p-medio bg-vecino"></div>
                                </ul>
                            <DrawerClose className="mt-4 py-6">
                                <div className="flex justify-center items-center gap-2">
                                    <SvgDrawerClose />
                                    <h3 className="text-2xl text-red-600">Cerrar</h3>
                                </div>
                            </DrawerClose>
                        </DrawerContent>    
                    </Drawer>
                </div>
                )}
            </header>
            <div className="p-minimo bg-black mb-10">

            </div>
    </main>
    )
}