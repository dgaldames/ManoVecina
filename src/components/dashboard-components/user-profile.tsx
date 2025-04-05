import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import SvgWhatsApp from "../../../public/dashboard-icons/wsp-svg";
import Link from "next/link";


export default function UserProfile({
    userName,
    userCell,
    userService,
    userDescription,
    userSchedule,
    userPrice,
    userExperience,
    userImage,
}:{userName: string, userCell: string, userService: string, userDescription: string, userSchedule: string, userPrice: string, userExperience: string, userImage: string}) {
    return (
        <div className="relative w-full p-5 bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-900 transition-all duration-200 ease-in-out">
            {/* Ocupación Principal */}
            <div className="absolute flex top-3 right-5 dark:bg-gray-900 bg-gray-100 px-4 py-4 rounded-lg">
                <h3 className="font-medium dark:text-white xl:text-3xl lg:text-xl text-lg">{userService}</h3>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5 xl:mt-0 mt-14 object-cover">
                <Image
                className="w-32 h-32 lg:w-48 lg:h-48 mb-3 rounded-full shadow-lg"
                alt="Bonnie image"
                src={userImage ? userImage :"/dashboard-imgs/kurisu.png"}
                width={128}
                height={128}
                quality={100}
                />
                <div className="flex flex-col items-start lg:ml-10 gap-y-5 bg-gray-100 dark:bg-gray-900 py-4 px-4 rounded-lg w-full lg:w-auto">
                    <div className="flex flex-col lg:flex-row items-start gap-1 lg:gap-3">
                        <label className="dark:text-white text-lg font-semibold">Nombre:</label>
                        <h3 className="dark:text-white text-lg">{userName}</h3>
                    </div>
                    <div className="flex flex-col lg:flex-row items-start gap-1 lg:gap-3">
                        <label className="dark:text-white text-lg font-semibold">Teléfono:</label>
                        <h3 className="dark:text-white text-lg">{userCell}</h3>
                    </div>
                </div>
            </div>

        <Separator orientation="horizontal" className="h-min bg-slate-500 dark:bg-white my-5" />

        <div className="flex flex-col lg:flex-row gap-5">
            <div className="flex flex-col gap-y-3 w-full lg:w-2/3">
                <label className="dark:text-white text-lg pl-2">Descripción:</label>
                <h3 id="descripcion" className="dark:text-white text-lg bg-gray-100 dark:bg-gray-900 py-6 px-4 rounded-lg">
                    {userDescription}
                </h3>
            </div>
            <Separator orientation="vertical" className="hidden lg:block h-52 mx-10 bg-slate-500 dark:bg-white" />
            <div className="flex flex-col gap-y-3 w-full lg:w-1/3">
                <div className="flex flex-col gap-y-1">
                    <label className="dark:text-white text-lg pl-2">Disponibilidad Horaria:</label>
                    <h3 className="dark:text-white text-lg dark:bg-gray-900 py-4 px-4 rounded-lg bg-gray-100">
                        {userSchedule}
                    </h3>
                </div>
            <Separator orientation="horizontal" className="h-min bg-slate-500 dark:bg-white lg:block hidden" />
                <div className="flex flex-col gap-y-1">
                    <label className="dark:text-white text-lg pl-2">Tarifas:</label>
                    <h3 className="dark:text-white text-lg dark:bg-gray-900 py-4 px-4 rounded-lg bg-gray-100">
                    Valor por hora: {userPrice}
                    </h3>
                </div>
            </div>
        </div>

        <Separator orientation="horizontal" className="h-min bg-slate-500 dark:bg-white my-5 " />

        <div className="flex flex-col lg:flex-row gap-5">
            <div className="flex flex-col gap-y-3 w-full lg:w-2/3">
                <label className="dark:text-white text-lg pl-2">Experiencia:</label>
                <h3 className="dark:text-white text-lg bg-gray-100 dark:bg-gray-900 py-6 px-4 rounded-lg">
                    {userExperience}
                </h3>
            </div>
            <Separator orientation="vertical" className="hidden lg:block h-52 mx-10 bg-slate-500 dark:bg-white" />

            {/* TODO ---- PONER EL CONTACTO PARA QUE VAYA A WHATSAPP */}
            <div className="flex flex-col items-center justify-center gap-3 w-full lg:w-1/3">
                <Link href={`https://wa.me/+56${userCell}?text=Hola, estoy interesado/a en sus servicios...`} target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 hover:ease-out transition duration-300 inline-flex items-center justify-center px-10 py-6 text-3xl font-semibold text-center text-white bg-green-500 rounded-lg ring-1 hover:ring-darkbg dark:hover:ring-white hover:bg-green-600 focus:ring-2 focus:ring-darkbg dark:focus:ring-white focus:outline-none w-full lg:w-auto">
                    Contactar
                    <SvgWhatsApp/>
                </Link>
            </div>
        </div>
        </div>
    );
}