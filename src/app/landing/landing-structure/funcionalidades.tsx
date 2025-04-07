import SvgOfrecerContratar from "../../../../public/ladingns-icons/funcionalidades/ofrecer-contratar-svg"
import SvgUserProfile from "../../../../public/ladingns-icons/funcionalidades/user-profile-svg"
import SvgConexionRapida from "../../../../public/ladingns-icons/funcionalidades/fast-conection-svg"

export default function Funcionalidades(){
    return(
        <main className="py-12 px-6 mb-52 bg-neutral-50" id="funcionalidades">
            <div className="flex justify-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Funcionalidades</h1>
            </div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-3 grid-cols-2 items-start gap-8"> {/* Div Padre */}
                
                <div>
                    <div className="pb-4">
                        <SvgOfrecerContratar />
                    </div>

                    <div>
                        <h2 className="md:text-3xl text-2xl font-bold text-gray-900">Ofrecer y Contratar</h2>
                        <p className="text-lg leading-relaxed text-gray-800 pt-4">Con ManoVecina, tanto quienes <strong>buscan un servicio</strong> como quienes <strong>desean ofrecerlo</strong> pueden hacerlo de manera rápida y sencilla. Solo crea tu perfil, selecciona la categoría que quieras.</p>
                    </div>
                </div>

                <div>
                    <div className="pb-4">
                        <SvgUserProfile />
                    </div>
                    <div>
                        <h2 className="md:text-3xl text-2xl font-bold text-gray-900">Perfil de Usuario</h2>
                        <p className="text-lg leading-relaxed text-gray-800 pt-4">Cada usuario tiene su <strong>propio perfil</strong>, donde puede incluir una <strong> descripción de sus habilidades y experiencia. </strong></p>
                    </div>
                </div>

                <div>
                    <div className="pb-4">
                        <SvgConexionRapida />
                    </div>
                    <div>
                        <h2 className="md:text-3xl text-2xl font-bold text-gray-900">Conexion Rapida</h2>
                        <p className="text-lg leading-relaxed text-gray-800 pt-4"> Encuentra el servicio que necesitas <strong> cerca de ti en minutos. </strong> Nuestra plataforma <strong> facilita la búsqueda de personas </strong> en tu área que ofrecen el tipo de ayuda que necesitas.</p>
                    </div>
                </div>

            </div>
        </main>
    )
}