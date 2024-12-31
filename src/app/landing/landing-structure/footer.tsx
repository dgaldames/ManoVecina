import Image from "next/image"

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
                                <a className="text-xl text-gray-900 hover:underline decoration-1 underline-offset-4 hover:text-vecino duration-200" href="#">Funcionalides</a>
                            </li>
                            <li className="py-5 grid items-center place-content-center">
                                <a className="text-xl text-gray-900 hover:underline decoration-1 underline-offset-4 hover:text-vecino duration-200" href="#">Contacto</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className="py-5 grid items-center place-content-center">
                                <a className="text-xl text-gray-900 hover:underline decoration-1 underline-offset-4 hover:text-vecino duration-200" href="#">Objetivo</a>
                            </li>
                            <li className="py-5 grid items-center place-content-center">
                                <a className="text-xl text-gray-900 hover:underline decoration-1 underline-offset-4 hover:text-vecino duration-200" href="#">FAQ</a>
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
                            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <rect x="3" y="5" width="18" height="14" rx="2" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                                <a className="text-xl text-gray-900 hover:underline decoration-1 underline-offset-4 hover:text-vecino duration-200" href="#">Correo</a>
                            </li>
                            <li className="py-3 flex items-center gap-3">
                            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15V13.9999H17.0762C17.5066 13.9999 17.8887 13.7245 18.0249 13.3161L18.4679 11.9871C18.6298 11.5014 18.2683 10.9999 17.7564 10.9999H15V8.99992C15 8.49992 15.5 7.99992 16 7.99992H18C18.5523 7.99992 19 7.5522 19 6.99992V6.31393C19 5.99091 18.7937 5.7013 18.4813 5.61887C17.1705 5.27295 16 5.27295 16 5.27295C13.5 5.27295 12 6.99992 12 8.49992V10.9999H10C9.44772 10.9999 9 11.4476 9 11.9999V12.9999C9 13.5522 9.44771 13.9999 10 13.9999H12V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="#0F0F0F"/>
                            </svg>
                                <a className="text-xl text-gray-900 hover:underline decoration-1 underline-offset-4 hover:text-vecino duration-200" href="#">Facebook</a>
                            </li>
                            <li className="py-3 flex items-center gap-3">
                            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#0F0F0F"/>
                                <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#0F0F0F"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#0F0F0F"/>
                            </svg>
                                <a className="text-xl text-gray-900 hover:underline decoration-1 underline-offset-4 hover:text-vecino duration-200" href="#">Instagram</a>
                            </li>
                            <li className="py-3 flex items-center gap-3">
                            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 462.799"><path fillRule="nonzero" d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"/></svg>
                                <a className="text-xl text-gray-900 hover:underline decoration-1 underline-offset-4 hover:text-vecino duration-200" href="#">X</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}