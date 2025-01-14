import UserProfile from "@/components/dashboard-components/user-profile"

export default function ProfilePage(){
    return(
        <div>
            <UserProfile 
                userName={"Felipe Galvez"}
                userCell="933944228"
                userMail={"dgaldames@pregrado.ubo.cl"}
                userService={"Jardineria General"}
                userDescription="Había una vez una persona que era toilet y luego llegó otra que era toilet... Había una vez una persona que era toilet y luego llegó otra que era toilet... Había una vez una persona que era toilet y luego llegó otra que era toilet... Había una vez una persona que era toilet y luego llegó otra que"
                userSchedule="Lunes a Viernes de 9:00 a 18:00"
                userPrice="$10000"
                userExperience="10 años en el rubro de la jardineria"
                >
            </UserProfile>
        </div>
    )
}
