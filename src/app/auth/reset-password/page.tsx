'use client'

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { redirect } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { resetPassword } from "@/lib/auth-actions";
import { EyeOff, Eye } from "lucide-react"
import Swal from "sweetalert2";

export default function ResetPasswordPage() {
    const searchParams = useSearchParams();
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordStrength, setPasswordStrength] = useState<string>('');

    const checkPasswordStrength = (password: string) => {
        const lengthCriteria = password.length >= 8;
        const numberCriteria = /\d/.test(password);
        const lowercaseCriteria = /[a-z]/.test(password);
        /*const uppercaseCriteria = /[A-Z]/.test(password);
        const specialCharacterCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password); */
    
        if (lengthCriteria && numberCriteria  && lowercaseCriteria /* && uppercaseCriteria && specialCharacterCriteria */) {
            setPasswordStrength('Fuerte');
        }else if (lengthCriteria && numberCriteria/* && (numberCriteria || lowercaseCriteria || uppercaseCriteria) */) {
            setPasswordStrength('ModeradaN');
        }else if(lengthCriteria  && lowercaseCriteria){
            setPasswordStrength('ModeradaL');
        }else {
            setPasswordStrength('Débil');
        }
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
        checkPasswordStrength(e.target.value);
    }

    const handleResetPassword = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(null);

        if(passwordStrength !== 'Fuerte'){
            await Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Prueba con una contraseña más segura!',
                confirmButtonColor: '#ff6c04',
            });
            return
        }
        setLoading(true);
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
            setLoading(false);
            return
        }
    };

    //TODO
    //HAY UN ERROR AL PONER OTRO CORREO QUE NO SEA EL DE LA CUENTA
    

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
                        <div className="relative">
                            <Input
                                value={password}
                                onChange={handlePasswordChange}
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Nueva contraseña"
                                name="password"
                                required
                                className="bg-gray-700 border-gray-600 text-white"
                            />
                            <button
                                type="button"
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-2"
                                onClick={() => setShowPassword(!showPassword)}
                                >
                                {showPassword ? <EyeOff size={20} color="white" /> :  <Eye size={20} color="white" />}
                            </button>
                        </div>
                        <div className="mt-1">
                            <small className={`text-sm ${passwordStrength === 'Débil' ? 'text-red-600' : passwordStrength === 'ModeradaN' ? 'text-yellow-600' : passwordStrength === 'ModeradaL' ? 'text-yellow-600' : 'text-green-600'}`}>
                                {passwordStrength === 'Débil' && 'La contraseña es débil, usa al menos 8 caracteres'}
                                {passwordStrength === 'ModeradaL' && 'La contraseña es moderada, combina con números'}
                                {passwordStrength === 'ModeradaN' && 'La contraseña es moderada, combina con letras'}
                                {passwordStrength === 'Fuerte' && 'La contraseña es fuerte.'}
                            </small>
                        </div>
                        <button
                            type="submit"
                            className="mt-4 w-full rounded-lg bg-orange-500 p-3 text-lg text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:bg-orange-600 disabled:opacity-50"
                            disabled={loading}
                            >
                            {loading ? "Reseteando..." : "Resetear contraseña"}
                        </button>
                        {error && <p className="text-red-500">{error}</p>} {//TODO: Quitar esto en un momento dado}
                        }
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}