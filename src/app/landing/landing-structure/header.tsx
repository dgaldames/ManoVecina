'use client'

import {Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger} from "@/components/ui/drawer"
import { useMediaQuery } from "@/components/ui/use-media-query"
import Image from "next/image"



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
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
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
                                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.00386 9.41816C7.61333 9.02763 7.61334 8.39447 8.00386 8.00395C8.39438 7.61342 9.02755 7.61342 9.41807 8.00395L12.0057 10.5916L14.5907 8.00657C14.9813 7.61605 15.6144 7.61605 16.0049 8.00657C16.3955 8.3971 16.3955 9.03026 16.0049 9.42079L13.4199 12.0058L16.0039 14.5897C16.3944 14.9803 16.3944 15.6134 16.0039 16.0039C15.6133 16.3945 14.9802 16.3945 14.5896 16.0039L12.0057 13.42L9.42097 16.0048C9.03045 16.3953 8.39728 16.3953 8.00676 16.0048C7.61624 15.6142 7.61624 14.9811 8.00676 14.5905L10.5915 12.0058L8.00386 9.41816Z" fill="#0F0F0F"/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z" fill="#0F0F0F"/>
                                    </svg>
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