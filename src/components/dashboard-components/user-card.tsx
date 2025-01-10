import Image from "next/image"
import Link from "next/link"

export default function UserCard ({ userName, userService, userDetails }:{userName: string, userService: string, userDetails: string}) {
    return(
        <div className="w-full max-w-lg pt-10 bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-900">
            <div className="flex flex-col items-center pb-8">
                <Image className="w-24 h-24 mb-3 rounded-full shadow-lg" 
                alt="Bonnie image" 
                src={"/dashboard-imgs/kurisu.png"}
                width={24}
                height={24}/>
                <h5 className="mb-2 text-xl font-medium text-gray-900 dark:text-white">{userName}</h5>
                <span className="text-bs text-gray-600 dark:text-gray-400 mb-2">{userService}</span>
                <p className="text-sm text-center text-gray-500 dark:text-gray-400">{userDetails}</p>

                <div className="flex mt-4 md:mt-6">
                    <Link href="/dashboard/dashboard-profile" className="inline-flex items-center px-4 py-2 text-lg font-medium text-center text-white bg-vecino rounded-lg hover:bg-orange-600 focus:ring-2  dark:focus:ring-white focus:ring-darkbg focus:outline-none">Ver Perfil</Link>
                </div>
            </div>
        </div>
    )
}