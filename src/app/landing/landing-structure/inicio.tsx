'use client'

export default function Inicio(){
    return(
        <main className="mb-52 py-12 px-6">
            
            <div className="w-1/3 mx-auto">
                <h1 className="md:text-6xl text-4xl text-center leading-tight font-semibold text-gray-900">Contrata y Ofrece Servicios con tus Vecinos</h1>
            </div>

            <div className="w-1/2 mx-auto mt-3 py-6 px-6 bg-gray-100 rounded-3xl">
                <h3 className="md:text-2xl text-lg text-center text-gray-900 font-medium">Una forma fácil y sencilla de conectar con tus vecinos para el contrato de servicios cercanos.</h3>
            </div>

            <div className="flex justify-center mt-14">
                <button onClick={() => {window.location.href = "/auth/new-account"}} className="rounded-2xl bg-vecino hover:bg-orange-600 hover:ease-out transition duration-300 transform hover:scale-105 md:px-8 px-5 md:py-6 py-3 md:text-2xl text-xl text-center text-white inline-flex items-center ">
                    Registrate de forma gratuita
                    <svg className="ml-2 w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 17C6 17.93 6 18.395 6.10222 18.7765C6.37962 19.8117 7.18827 20.6204 8.22354 20.8978C8.60504 21 9.07003 21 10 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H10C9.07003 3 8.60504 3 8.22354 3.10222C7.18827 3.37962 6.37962 4.18827 6.10222 5.22354C6 5.60504 6 6.07003 6 7M12 8L16 12M16 12L12 16M16 12H3" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                </button>
            </div>

            <div className="flex justify-center mt-6">
                <span className="md:text-xl text-lg text-gray-900">¿Ya tienes una cuenta? <a href="/auth/login" className="underline decoration-1 underline-offset-4 hover:text-vecino hover:decoration-transparent duration-200">Inicia sesión ahora</a></span>
            </div>

        </main>
    )
}