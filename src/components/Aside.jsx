import { useState, useEffect } from "react";
import aside1 from "../assets/aside-imgs/aside-1.webp";
import aside2 from "../assets/aside-imgs/aside-2.webp";
import aside3 from "../assets/aside-imgs/aside-3.webp";
import aside4 from "../assets/aside-imgs/aside-4.webp";
import aside5 from "../assets/aside-imgs/aside-5.webp";
import ArrowLeft from "../components/helpers/ArrowLeft";
import ArrowRight from "../components/helpers/ArrowRight";


const Aside = () => {

    const [url, setUrl] = useState(aside1);

    const handleRight = () => {
        setUrl(aside2);
    }
    
    return (
        <aside className="aside">
            <img srcSet={url} alt="Imágen de ofertas" className="aside-img"/>
            <span ><ArrowLeft clase={"aside-arrowLeft"} /></span>
            <span onClick={handleRight}><ArrowRight  clase={"aside-arrowRight"}/></span>
            <ul>
                <li onClick={ () => setUrl(aside1)}></li>
                <li onClick={ () => setUrl(aside2)}></li>
                <li onClick={ () => setUrl(aside3)}></li>
                <li onClick={ () => setUrl(aside4)}></li>
                <li onClick={ () => setUrl(aside5)}></li>
            </ul>
        </aside>
    )
}

export default Aside