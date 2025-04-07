import Image from "next/image"

export default function Objetivo(){
    return(
        <main className="bg-neutral-50 py-12 px-6 mb-44" id="target">
            <div className="md:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-28 items-center">
                {/* Texto */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Historia
                    </h1>
                    <p className="text-xl leading-relaxed text-gray-800">
                    <strong>ManoVecina nació como una idea para mi tesis universitaria</strong>, pero tras ser rechazada, decidí retomarla ya titulado como ingeniero en informática por la Universidad Bernardo O&apos;Higgins. Durante un periodo sin trabajo, con tiempo libre y ganas de crecer, opté por desarrollar esta plataforma con dos fines: ayudar a mi comunidad y seguir aprendiendo como profesional. <strong>ManoVecina es, y seguirá siendo, un servicio gratuito</strong> que busca conectar a vecinos con personas que ofrecen ayuda en tareas cotidianas. Si alguna vez te es útil y deseas apoyar el proyecto, <strong>tendrás la opción totalmente voluntaria de hacer una donación monetaria</strong>.
                    <span className="block mt-2 text-vecino font-semibold">
                        Donación voluntaria a Cuenta RUT: 21.088.563-3
                    </span>
                    </p>
                </div>
                {/* Imagen */}
                <div className="flex justify-center">
                    <div className="relative transition-transform duration-300 hover:scale-105">
                        <Image
                            src={"/landing-imgs/target/historia-img.jpeg"}
                            alt="Imagen del Objetivo de ManoVecina"
                            width={400}
                            height={400}
                            className="rounded-xl shadow-2xl"
                            /* placeholder="blur"
                            blurDataURL={"/landing-imgs/target/historia-img-blur.jpeg"} // Asegurate de tener una versión pequeña como placeholder */
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}