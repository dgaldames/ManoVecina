'use client'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button-login"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input-login"
import { Label } from "@/components/ui/label"
//import { createClient } from "@/app/utils/supabase/supabase-client"
import { useState } from "react"
import Image from "next/image"
import SignInWithGoogleButton from "./sign-in-with-google-btn"
import { EyeOff, Eye } from "lucide-react"
import { login } from "@/lib/auth-actions"
import Link from "next/link"
import Swal from "sweetalert2"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  const [showPassword, showSetPassword] = useState(false)
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');

  const checkPasswordStrength = (password: string) => {
    const lengthCriteria = password.length >= 8;
    const numberCriteria = /\d/.test(password);
    const lowercaseCriteria = /[a-z]/.test(password);

    if (lengthCriteria && numberCriteria  && lowercaseCriteria) {
      setPasswordStrength('Fuerte');
    } else if (lengthCriteria && numberCriteria) {
      setPasswordStrength('ModeradaN');
    }else if(lengthCriteria  && lowercaseCriteria){
      setPasswordStrength('ModeradaL');
    }
    else {
      setPasswordStrength('Débil');
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    checkPasswordStrength(e.target.value);
  };

  async function handleAlert(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const result = await login(formData);

    if (result.error) {
        await Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Las credenciales no son validas :( Intenta de nuevo!',
            confirmButtonColor: '#ff6c04',
        });
        return
    }else if(result.error === null){
      await Swal.fire({
          icon: 'success',
          title: 'Bienvenido!',
          text: 'Ya puedes comenzar a contratar u ofrecer tus servicios!',
          showConfirmButton: true,
          confirmButtonColor: '#ff6c04',
          willClose: () => {
              window.location.href = '/dashboard';
          }
      });
  }
}
//TODO PONER EL EFECTO DE LOADING
//PONER QUE NO PUEDA PULSAR EN RESETEAR A MENOS QUE LA CONTRASENA SEA FUERTE

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleAlert}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold py-3">Bienvenido de Vuelta!</h1>
                <p className="text-balance text-neutral-500 dark:text-neutral-400">
                  Inicia sesión con tu cuenta
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Correo</Label>
                <Input
                  /* value={email}
                  onChange={(e) => setEmail(e.target.value)} */
                  id="email"
                  type="email"
                  name="email"
                  placeholder="ejemplo@gmail.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Contraseña</Label>
                  <Link
                    href="/auth/forgot-password"
                    className="ml-auto text-sm underline decoration-1 underline-offset-4 hover:text-vecino hover:decoration-transparent duration-200"
                  >
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    value={password}
                    onChange={handlePasswordChange}
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    required
                    className="pr-10"
                  />
                  <Button
                    type="button"
                    variant="link"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2"
                    onClick={() => showSetPassword(!showPassword)}
                    size="icon"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </Button>
                </div>
                <div className="mt-1">
                  <small className={`text-xs ${passwordStrength === 'Débil' ? 'text-red-600' : passwordStrength === 'ModeradaN' ? 'text-yellow-600' : passwordStrength === 'ModeradaL' ? 'text-yellow-600' : 'text-green-600'}`}>
                    {passwordStrength === 'Débil' && 'La contraseña es débil, usa más letras y combina con números '}
                    {passwordStrength === 'ModeradaL' && 'La contraseña es moderada, combina con números'}
                    {passwordStrength === 'ModeradaN' && 'La contraseña es moderada, combina con letras'}
                    {passwordStrength === 'Fuerte' && 'La contraseña es fuerte.'}
                  </small>
                </div>
              </div>
              <Button type="submit" /* formAction={login} */   className="w-full text-base bg-vecino hover:bg-gray-950">
                Iniciar Sesión
              </Button>
              {/* {error && <p>{error}</p>} */}
              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-neutral-200 dark:after:border-neutral-800">
                <span className="relative z-10 bg-white px-2 text-neutral-500 dark:bg-neutral-950 dark:text-neutral-400">
                  Continuar con
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <SignInWithGoogleButton/>
              </div>

              <div className="text-center text-sm">
                ¿No tienes una cuenta?{" "}
                <Link href="/auth/new-account" className="underline underline-offset-4 decoration-1 hover:text-vecino hover:decoration-transparent duration-200">
                  Registrate
                </Link>
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
    </div>
  )
}
