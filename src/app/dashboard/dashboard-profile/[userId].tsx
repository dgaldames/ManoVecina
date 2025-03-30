import { useRouter } from "next/router"
import UserProfile from "@/components/dashboard-components/user-profile"

export default function DynamicUserProfile() {
    const router = useRouter()
    const { userId } = router.query

    return (
        <div>
            <h1>Perfil del Usuario</h1>
            <p>ID del usuario: {userId}</p>
            <UserProfile 
                userName={"Usuario Ejemplo"}
                userCell={"000000000"}
                userMail={"ejemplo@mail.com"}
                userService={"Servicio de ejemplo"}
                userDescription={"Descripción de ejemplo"}
                userSchedule={"Horario de ejemplo"}
                userPrice={"$0"}
                userExperience={"Experiencia de ejemplo"}
            />
        </div>
    )
}