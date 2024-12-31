import Image from "next/image"

export default function Objetivo(){
    return(
        <main className="bg-neutral-50 py-12 px-6 mb-44">
            <div className="md:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-28 items-center">
                {/* Texto */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Nuestro Objetivo
                    </h1>
                    <p className="text-xl leading-relaxed text-gray-800">
                        ManoVecina tiene como objetivo conectar a la comunidad a través de una plataforma que facilita el acceso a servicios locales de confianza. Creemos en el poder de la colaboración entre vecinos y en la oportunidad de ofrecer soluciones rápidas y accesibles para quienes buscan ayuda en tareas como jardinería, reparaciones, paseos de mascotas y mucho más. Con ManoVecina, potenciamos la economía local y brindamos oportunidades laborales a quienes tienen habilidades que ofrecer.
                    </p>
                </div>
                {/* Imagen */}
                <div className="flex justify-center">
                    <Image
                        src={"/landing-imgs/target/banner-who.jpg"}
                        alt="Imagen del Objetivo de ManoVecina"
                        width={600}
                        height={400}
                        className="rounded-xl shadow-2xl"
                    />
                </div>
            </div>
        </main>
    )
}