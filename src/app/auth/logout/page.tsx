'use client';
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LogoutPage =  () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(()=> router.push("/"), 2000);
    }, []);
    return <div>Has cerrado tu sesion, te redirigiremos en unos segundos...</div>;
};

export default LogoutPage;