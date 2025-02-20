"use client";

import { useState } from "react";
import { forgotPassword } from "@/lib/auth-actions";
import Image from "next/image";
import Swal from "sweetalert2";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Por favor, ingresa tu correo.",
        });
        return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('email', email);
    const success = await forgotPassword(formData);
    setLoading(false);

    if (success) {
        Swal.fire({
            icon: "success",
            title: "¡Correo enviado!",
            text: "Revisa tu bandeja de entrada para restablecer tu contraseña.",
            showConfirmButton: true,
            confirmButtonText: 'Voy para allá!',
            confirmButtonColor: '#ff6c04',
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Hubo un problema al enviar el correo. Inténtalo nuevamente.",
        });
    }
};

//PONER BIEN LA IMAGEN DE LA PAGINA

return (
        <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-900 text-white">
            <h1 className="text-3xl font-bold">🔑 Recuperar Contraseña</h1>
            <p className="mt-2 text-gray-300">Ingresa tu correo y te enviaremos un enlace para restablecer tu contraseña.</p>

            <div className="relative mt-6 h-40 w-40">
                <Image
                src="/forgot-password.gif" // Asegúrate de tener un GIF en public/
                alt="Recuperar contraseña"
                layout="fill"
                objectFit="contain"
                unoptimized
                />
            </div>

            <form onSubmit={handleSubmit} className="mt-4 w-full max-w-sm">
                <input
                    type="email"
                    placeholder="Tu correo electrónico"
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 p-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button
                    type="submit"
                    className="mt-4 w-full rounded-lg bg-vecino p-3 text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:bg-orange-700 disabled:opacity-50"
                    disabled={loading}
                    >
                    {loading ? "Enviando..." : "Enviar enlace"}
                </button>
            </form>

            <button
                onClick={() => (window.location.href = "/auth/login")}
                className="mt-6 text-gray-400 transition-all hover:text-white"
            >
                🔙 Volver al inicio de sesión
            </button>
        </div>
    );
}