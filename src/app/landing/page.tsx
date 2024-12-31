import Header from './landing-structure/header';
import Inicio from './landing-structure/inicio';
import Objetivo from './landing-structure/target';
import Funcionalidades from './landing-structure/funcionalidades';
import Faq from './landing-structure/faq';
import Contacto from './landing-structure/contacto';
import Footer from './landing-structure/footer';


export default function LandingPage(){
    return(
        <main>
            <Header/>
            <Inicio/>
            <Objetivo/>
            <Funcionalidades/>
            <Faq/>
            <Contacto/>
            <Footer/>
        </main>
    )
}