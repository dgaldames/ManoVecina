'use client'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button-login"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input-login"
import { Label } from "@/components/ui/label"
import Image from "next/image"

export function NewAccountForm({
    className,
    ...props
    }: React.ComponentProps<"div">) {
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
        <Card className="overflow-hidden">
            <CardContent className="grid p-0 md:grid-cols-2">
            <form className="p-6 md:p-8">
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
                        className=""
                        id="email"
                        type="email"
                        placeholder="ejemplo@gmail.com"
                        required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="name">Nombre</Label>
                        <Input
                        className=""
                        id="name"
                        type="text"
                        placeholder="Juan Perez"
                        required
                        />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                        <Label htmlFor="password">Contraseña</Label>
                        </div>
                        <Input id="password" type="password" required />
                    </div>
                    <Button type="submit" className="w-full text-base bg-vecino hover:bg-gray-950">
                        Registrarme
                    </Button>
                    <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-neutral-200 dark:after:border-neutral-800">
                        <span className="relative z-10 bg-white px-2 text-neutral-500 dark:bg-neutral-950 dark:text-neutral-400">
                        Continuar con
                        </span>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <Button variant="outline" className="w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                        <path d="M12 2a9.96 9.96 0 0 1 6.29 2.226a1 1 0 0 1 .04 1.52l-1.51 1.362a1 1 0 0 1 -1.265 .06a6 6 0 1 0 2.103 6.836l.001 -.004h-3.66a1 1 0 0 1 -.992 -.883l-.007 -.117v-2a1 1 0 0 1 1 -1h6.945a1 1 0 0 1 .994 .89c.04 .367 .061 .737 .061 1.11c0 5.523 -4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10z"></path>
                        </svg>
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