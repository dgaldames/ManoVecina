import Link from 'next/link'
import SvgLogin from '../../../../public/ladingns-icons/inicio/login-svg'

export default function Inicio(){
    return(
        <main className="mb-52 py-12 px-6">
            
            <div className="w-1/3 mx-auto">
                <h1 id='btn-registrar' className="md:text-6xl text-4xl text-center leading-tight font-semibold text-gray-900">Contrata y Ofrece Servicios con tus Vecinos</h1>
            </div>

            <div className="w-1/2 mx-auto mt-3 py-6 px-6 bg-gray-100 rounded-3xl">
                <h3 className="md:text-2xl text-lg text-center text-gray-900 font-medium">Una forma fácil y sencilla de conectar con tus vecinos para el contrato de servicios cercanos.</h3>
            </div>

            <div className="flex justify-center mt-14">
                <Link href="/auth/new-account"
                    className="rounded-2xl bg-vecino hover:bg-orange-600 hover:ease-out transition duration-300 transform hover:scale-105 md:px-8 px-5 md:py-6 py-3 md:text-2xl text-xl text-center text-white inline-flex items-center "
                    >Registrate de forma gratuita
                    <SvgLogin/>
                    </Link>
                
            </div>

            <div className="flex justify-center mt-6">
                <span className="md:text-xl text-lg text-gray-900">¿Ya tienes una cuenta? <Link href="/auth/login" className="underline decoration-1 underline-offset-4 hover:text-vecino hover:decoration-transparent duration-200">Inicia sesión ahora</Link></span>
            </div>

        </main>
    )
}