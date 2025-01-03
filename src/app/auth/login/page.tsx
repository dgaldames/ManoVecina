import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
    return (
        <div className="relative flex min-h-svh flex-col items-center justify-center p-6 md:p-10 bg-login-background bg-cover">
            {/* Capa de overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
            <div className="w-full max-w-sm md:max-w-3xl relative z-10">
                <LoginForm />
            </div>
        </div>
    )
}
