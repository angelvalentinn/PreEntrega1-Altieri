import aside from "../assets/aside-imgs/aside-1.webp";
import ArrowLeft from "../components/helpers/ArrowLeft";
import ArrowRight from "../components/helpers/ArrowRight";

const Aside = () => {

    const saludar = () => {
        console.log("hola beba");
    }

    return (
        <aside className="aside">
            <img srcSet={aside} alt="Imágen de ofertas" className="aside-img"/>
            <span onClick={saludar}><ArrowLeft clase={"aside-arrowLeft"} /></span>
            <ArrowRight clase={"aside-arrowRight"}/>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </aside>
    )
}

export default Aside