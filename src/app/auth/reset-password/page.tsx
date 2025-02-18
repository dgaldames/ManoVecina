'use client'

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { redirect } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { resetPassword } from "@/lib/auth-actions";
import Swal from "sweetalert2";

export default function ResetPasswordPage() {
    const searchParams = useSearchParams();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleResetPassword = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        const formData = new FormData(event.currentTarget);
        const result = await resetPassword(formData, searchParams.get("code") as string);

        if(result.status === "success"){
            await Swal.fire({
                icon: "success",
                title: "¡Contraseña restablecida!",
                text: "Tu contraseña ha sido restablecida exitosamente.",
                showConfirmButton: true,
                confirmButtonText: 'Ok',
                confirmButtonColor: '#ff6c04',
            });
            return redirect("/auth/login")
        }else{
            setError(result.status);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Hubo un problema al restablecer tu contraseña. Inténtalo nuevamente.",
            });
        }
        
        setLoading(false);
    };

    //TODO
    //PONERLE MAS SEGURIDAD A LA NUEVA CONTRASENA

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
            <Card className="w-full max-w-md bg-gray-800 shadow-xl">
                <CardHeader>
                    <CardTitle className="text-center text-orange-500 text-xl">🔒 Reiniciar Contraseña</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleResetPassword} className="flex flex-col gap-4">
                        <label htmlFor="password" className="text-sm text-gray-300">
                            Ingresa tu nueva contraseña
                        </label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Nueva contraseña"
                            name="password"
                            className="bg-gray-700 border-gray-600 text-white"
                        />
                        <button
                            type="submit"
                            className="mt-4 w-full rounded-lg bg-orange-500 p-3 text-lg text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:bg-orange-600 disabled:opacity-50"
                            disabled={loading}
                            >
                            {loading ? "Reseteando..." : "Resetear contraseña"}
                        </button>
                        {error && <p className="text-red-500">{error}</p>}
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}