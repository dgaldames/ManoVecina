'use client'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button-login"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input-login"
import { Label } from "@/components/ui/label"
import { createClient } from "@/app/utils/supabase/supabase-client"
import { useState } from "react"
import { useRouter } from "next/navigation" // Cambiamos a next/navigation para redirección
import Swal from "sweetalert2"
import Image from "next/image"
import SvgGoogle from "../../../public/login-icons/sign-up-google-svg"
import { Eye, EyeOff } from "lucide-react"

export function NewAccountForm({
    className,
    ...props
    }: React.ComponentProps<"div">) {

    const [showPassword, showSetPassword] = useState(false)
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState<string | null>(null)

    const supabase = createClient()
    const router = useRouter() // Hook para redirección

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault()
        setError(null)

        const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: { name },
        },
        })

        if (error) {
        setError(error.message)
        } else {
        Swal.fire({
            title: "Registro exitoso",
            text: "Tu cuenta ha sido creada correctamente",
            icon: "success",
        }).then(() => {
            router.push("/dashboard") // Redirigir al dashboard
        })
        }
    }

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
        <Card className="overflow-hidden">
            <CardContent className="grid p-0 md:grid-cols-2">
            <form onSubmit={handleSignUp} className="p-6 md:p-8">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-center text-center">
                        <h1 className="text-2xl font-bold py-3">Bienvenido!</h1>
                        <p className="text-balance text-neutral-500 dark:text-neutral-400">
                        Registra tu cuenta para comenzar
                        </p>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Correo</Label>
                        <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                        type="email"
                        placeholder="ejemplo@gmail.com"
                        required
                        />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="password">Contraseña</Label>
                        </div>
                        <div className="relative">
                            <Input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                id="password"
                                type={showPassword ? "text" : "password"}
                                required
                                className="pr-10" // Espacio para el ícono
                            />
                            
                            <Button
                                type="button"
                                onClick={() => showSetPassword(!showPassword)}
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-2"
                                variant="link"
                                size="icon"
                                >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </Button>
                        </div>
                    </div>
                    <Button type="submit" className="w-full text-base bg-vecino hover:bg-gray-950">
                        Registrarme
                    </Button>
                    {error && <p>{error}</p>}
                    <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-neutral-200 dark:after:border-neutral-800">
                        <span className="relative z-10 bg-white px-2 text-neutral-500 dark:bg-neutral-950 dark:text-neutral-400">
                        Continuar con
                        </span>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <Button variant="outline" className="w-full">
                            <SvgGoogle />
                        <span className="sr-only">Iniciar sesión con Google</span>
                        </Button>
                    </div>
                    <div className="text-center text-sm">
                        ¿Ya tienes una cuenta?{" "}
                        <a href="/auth/login" className="underline underline-offset-4 decoration-1 hover:text-vecino hover:decoration-transparent duration-200">
                        Iniciar sesión
                        </a>
                    </div>
                </div>
            </form>
            <div className="relative hidden bg-gray-100 md:block dark:bg-neutral-800">
                <div className="absolute inset-0 flex items-center justify-center">
                <Image
                    src={'/landing-imgs/header/LogoFinalVersion.png'}
                    alt='Logo ManoVecina'
                    width={270}
                    height={220}
                    priority
                    />
                </div>
            </div>
            </CardContent>
        </Card>
        <div className="text-balance text-center text-xs text-white [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-vecino hover:[&_a]:decoration-transparent [&_a]:duration-200">
            Al registrarte, estas de acuerdo con nuestros <a href="#">Terminos y condiciones</a>{" "}
            and <a href="#">Politica y privacidad</a>.
        </div>
        </div>
    )
}