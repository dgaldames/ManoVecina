import Image from "next/image"
import SvgCorreo from "../../../../public/ladingns-icons/footer/correo-svg"
import SvgFacebook from "../../../../public/ladingns-icons/footer/facebook-svg"
import SvgInstagram from "../../../../public/ladingns-icons/footer/instagram-svg"
import SvgX from "../../../../public/ladingns-icons/footer/X-svg"

export default function Footer(){
    return(
        <main>
            <div className="py-7 bg-vecino">
                {/* Barra Naranja*/}
            </div>

            <div className="grid md:grid-cols-3 grid-cols-1 w-full mx-auto py-12 px-6"> {/* Div Padre */}
                <div className="grid items-center place-self-center pb-5">
                    <Image
                    src={'/landing-imgs/footer/LogoFinalVersion.png'}
                    alt='Logo ManoVecina'
                    width={270}
                    height={220}
                    priority
                    />
                </div>
                <div className="grid p-1 md:grid-cols-2 grid-cols-1 border-t border-b md:border-r md:border-t-transparent md:border-b-transparent md:border-l border-gray-900">
                    <div>
                        <ul>
                            <li className="py-5 grid items-center place-content-center">
                                <a className="text-xl text-gray-900 hover:underline decoration-1 underline-offset-4 hover:text-vecino duration-200" href="#">Inicio</a>
                            </li>
                            <li className="py-5 grid items-center place-content-center">
                                <a className="text-xl text-gray-900 hover:underline decoration-1 underline-offset-4 hover:text-vecino duration-200" href="#funcionalidades">Funcionalides</a>
                            </li>
                            <li className="py-5 grid items-center place-content-center">
                                <a className="text-xl text-gray-900 hover:underline decoration-1 underline-offset-4 hover:text-vecino duration-200" href="#contacto">Contacto</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className="py-5 grid items-center place-content-center">
                                <a className="text-xl text-gray-900 hover:underline decoration-1 underline-offset-4 hover:text-vecino duration-200" href="#target">Objetivo</a>
                            </li>
                            <li className="py-5 grid items-center place-content-center">
                                <a className="text-xl text-gray-900 hover:underline decoration-1 underline-offset-4 hover:text-vecino duration-200" href="#faq">FAQ</a>
                            </li>
                            <li className="py-5 grid items-center place-content-center">
                                <a className="text-xl text-gray-900 hover:underline decoration-1 underline-offset-4 hover:text-vecino duration-200" href="#">Terminos y Condiciones</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="grid md:grid-cols-1 p-4">
                    <div className="grid items-center place-content-center">
                        <ul>
                            <li className="py-3 flex items-center gap-3">
                                <SvgCorreo />
                                <a className="text-xl text-gray-900 hover:underline decoration-1 underline-offset-4 hover:text-vecino duration-200" href="#">Correo</a>
                            </li>
                            <li className="py-3 flex items-center gap-3">
                                <SvgFacebook />
                                <a className="text-xl text-gray-900 hover:underline decoration-1 underline-offset-4 hover:text-vecino duration-200" href="#">Facebook</a>
                            </li>
                            <li className="py-3 flex items-center gap-3">
                                <SvgInstagram />
                                <a className="text-xl text-gray-900 hover:underline decoration-1 underline-offset-4 hover:text-vecino duration-200" href="#">Instagram</a>
                            </li>
                            <li className="py-3 flex items-center gap-3">
                                <SvgX />
                                <a className="text-xl text-gray-900 hover:underline decoration-1 underline-offset-4 hover:text-vecino duration-200" href="#">X</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}