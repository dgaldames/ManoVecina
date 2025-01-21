import MyProfilePage from "@/components/dashboard-components/my-profile";

export default function MyProfile(){
    return(
        <div>
            <MyProfilePage
                userName={"Diego Galdames"}
                userCell="933944228"
                userMail={"dgaldames@pregrado.ubo.cl"}
                userService={"Tala de Arboles General"}
                userDescription="Había una vez una persona que era Skibidi y luego llegó otra que era toilet... Había una vez una persona que era toilet y luego llegó otra que era toilet... Había una vez una persona que era toilet y luego llegó otra que era toilet... Había una vez una persona que era toilet y luego llegó otra que"
                userSchedule="Lunes a Viernes de 9:00 a 18:00"
                userPrice="$10000"
                userExperience="10 años en el rubro de la tala de arboles"
            ></MyProfilePage>
        </div>
    )
}