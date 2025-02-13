'use client'
import Image from "next/image";

export default function ErrorPage() {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-900 text-white">
            <h1 className="text-6xl font-bold">¡Oops!</h1>
            <p className="mt-2 text-lg text-gray-300">Parece que algo salió mal... </p>
            <p className="text-md text-gray-500">(O quizás rompiste la simulación 🤖)</p>
    
            <div className="mt-6 flex flex-col items-center">
                {/* Se usa un div contenedor porque <Image /> no soporta directamente GIFs */}
                <div className="relative h-96 w-96">
                    <Image className="rounded-3xl shadow-lg"
                        src="error-page-img-gifs/404-gato.jpg"
                        /* src="error-page-img-gifs/yui-hirasawa-kon-error.gif" */ // Pon el GIF en la carpeta public/
                        alt="Error GIF"
                        layout="fill" // Ocupa todo el div contenedor
                        objectFit="contain" // Mantiene la proporción original del GIF
                        unoptimized // IMPORTANTE: Evita que Next.js intente optimizar el GIF
                    />
                </div>
        
                <button
                    onClick={() => (window.location.href = "/")}
                    className="mt-6 rounded-lg bg-orange-500 px-6 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-orange-600"
                >
                    Volver al Inicio
                </button>
            </div>
        </div>
    );
}