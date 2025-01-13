

export default function OfrecerPage(){
    return(
            <div className="bg-white border p-5 border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-900 transition-all duration-200 ease-in-out">
                <div className="flex justify-center">
                    <h1 className="dark:text-white text-3xl font-semibold mb-7 ">Completa los datos para ofrecer tus servicios</h1>
                </div>
                <form>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                            <input type="text" id="nombre" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Titor" required />
                        </div>
                        <div>
                            <label htmlFor="telefono" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefono</label>
                            <input type="tel" id="telefono" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="912345678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo</label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.titor@gmail.com" required />
                        </div> 
                        <div>
                            <label htmlFor="nombre_servicio" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre del Servicio</label>
                            <input type="text" id="nombre_servicio" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Jardineria General" required />
                        </div>
                        <div>
                            <label htmlFor="tarifa" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tarifa por Servicio</label>
                            <input type="text" id="tarifa" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$10.000 - $15.000" required />
                        </div>  
                        <div>
                            <label htmlFor="disponibilidad" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Disponibilidad Horaria</label>
                            <input type="url" id="disponibilidad" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Lunes a Viernes de 10:00 a 15:00" required />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="descripcion" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripcion su Servicio</label>
                        <input type="text" id="descripcion" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Me especializo en la poda de arbustos y tala de arboles..." required />
                    </div> 
                    <div className="mb-6">
                        <label htmlFor="experiencia" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Experiencia de su Servicio</label>
                        <input type="text" id="experiencia" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Cuento con mas de 10 anhos en el rubro..." required />
                    </div> 
                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                        </div>
                        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                    </div>
                    <button type="submit" className="text-white bg-vecino rounded-lg hover:bg-orange-600 focus:ring-2  dark:focus:ring-white focus:ring-darkbg focus:outline-none text-lg w-full lg:w-auto px-5 py-2.5 text-center">Publicar mis Servicios</button>
                </form>
            </div>
    )
}