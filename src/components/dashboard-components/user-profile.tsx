import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function UserProfile() {
    return (
        <div className="w-full p-5 bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-900">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5">
            <Image
            className="w-32 h-32 lg:w-48 lg:h-48 mb-3 rounded-full shadow-lg"
            alt="Bonnie image"
            src={"/dashboard-imgs/kurisu.png"}
            width={42}
            height={42}
            />
            <div className="flex flex-col items-start lg:ml-10 gap-y-5 bg-gray-100 dark:bg-gray-900 py-4 px-4 rounded-lg w-full lg:w-auto">
            <div className="flex flex-col lg:flex-row items-start gap-1 lg:gap-3">
                <label className="dark:text-white text-lg font-semibold">Nombre:</label>
                <h3 className="dark:text-white text-lg">Felipe Galvez</h3>
            </div>
            <div className="flex flex-col lg:flex-row items-start gap-1 lg:gap-3">
                <label className="dark:text-white text-lg font-semibold">Teléfono:</label>
                <h3 className="dark:text-white text-lg">933944228</h3>
            </div>
            <div className="flex flex-col lg:flex-row items-start gap-1 lg:gap-3">
                <label className="dark:text-white text-lg font-semibold">Correo:</label>
                <h3 className="dark:text-white text-lg">dgaldames@pregrado.ubo.cl</h3>
            </div>
            </div>
        </div>

        <Separator orientation="horizontal" className="h-min bg-slate-500 dark:bg-white my-5" />

        <div className="flex flex-col lg:flex-row gap-5">
            <div className="flex flex-col gap-y-3 w-full lg:w-2/3">
                <label className="dark:text-white text-lg pl-2">Descripción:</label>
                <h3 className="dark:text-white text-lg bg-gray-100 dark:bg-gray-900 py-6 px-4 rounded-lg">
                    Había una vez una persona que era toilet y luego llegó otra que era toilet...
                </h3>
            </div>
            <Separator orientation="vertical" className="hidden lg:block h-52 mx-10 bg-slate-500 dark:bg-white" />
            <div className="flex flex-col gap-y-3 w-full lg:w-1/3">
                <div className="flex flex-col gap-y-1">
                    <label className="dark:text-white text-lg pl-2">Disponibilidad Horaria:</label>
                    <h3 className="dark:text-white text-lg dark:bg-gray-900 py-4 px-4 rounded-lg bg-gray-100">
                    De Lunes a Viernes de 8:00 a 18:00
                    </h3>
                </div>
            <Separator orientation="horizontal" className="h-min bg-slate-500 dark:bg-white lg:block hidden" />
            <div className="flex flex-col gap-y-1">
                <label className="dark:text-white text-lg pl-2">Tarifas:</label>
                <h3 className="dark:text-white text-lg dark:bg-gray-900 py-4 px-4 rounded-lg bg-gray-100">
                Valor por hora: $10.000
                </h3>
            </div>
            </div>
        </div>

        <Separator orientation="horizontal" className="h-min bg-slate-500 dark:bg-white my-5 " />

        <div className="flex flex-col lg:flex-row gap-5">
            <div className="flex flex-col gap-y-3 w-full lg:w-2/3">
            <label className="dark:text-white text-lg pl-2">Experiencia:</label>
            <h3 className="dark:text-white text-lg bg-gray-100 dark:bg-gray-900 py-6 px-4 rounded-lg">
                Había una vez una persona que era toilet y luego llegó otra que era toilet...
            </h3>
            </div>
            <Separator orientation="vertical" className="hidden lg:block h-52 mx-10 bg-slate-500 dark:bg-white" />
            <div className="flex flex-col items-center gap-3 w-full lg:w-1/3">
            <a
                href="/dashboard/dashboard-profile"
                className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-center text-white bg-vecino rounded-lg hover:bg-orange-600 focus:ring-2 focus:ring-orange-400 dark:focus:ring-white focus:outline-none w-full lg:w-auto"
            >
                Contactar
            </a>
            <a
                href="/dashboard/dashboard-profile"
                className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-center text-white bg-vecino rounded-lg hover:bg-orange-600 focus:ring-2 focus:ring-orange-400 dark:focus:ring-white focus:outline-none w-full lg:w-auto"
            >
                Favoritos
            </a>
            </div>
        </div>
        </div>
    );
}