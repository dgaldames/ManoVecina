'use client'


import React from "react"
import SvgGoogle from "../../../public/login-icons/sign-up-google-svg"
import { Button } from "@/components/ui/button-login"
import { signInWithGoogle } from "@/lib/auth-actions"

const SignInWithGoogleButton = () =>{
    return(
        <Button 
            type="button" 
            variant="outline" 
            className="w-full"
            onClick={() => {
                signInWithGoogle()
            }}>
            <SvgGoogle />
            <span className="sr-only">Iniciar sesión con Google</span>
        </Button>
    )
}

export default SignInWithGoogleButton