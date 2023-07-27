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

    useEffect(() => {
      
        const interval = setInterval(() => {
            if(url == aside1) setUrl(aside2)
            else if(url == aside2) setUrl(aside3)
            else if(url == aside3) setUrl(aside4)
            else if(url == aside4) setUrl(aside5)
            else if(url == aside5) setUrl(aside1)     
        }, 5000);

      return () => {
        clearInterval(interval);
      }
    },[url]);
    

    const handleLeft = () => {
        if(url == aside1) setUrl(aside5)
        else if(url == aside2) setUrl(aside1)
        else if(url == aside3) setUrl(aside2)
        else if(url == aside4) setUrl(aside3)
        else if(url == aside5) setUrl(aside4)        
    }

    const handleRight = () => {
        if(url == aside1) setUrl(aside2)
        else if(url == aside2) setUrl(aside3)
        else if(url == aside3) setUrl(aside4)
        else if(url == aside4) setUrl(aside5)
        else if(url == aside5) setUrl(aside1)        
    }
    
    return (
        <aside className="aside">
            <img srcSet={url} alt="Imágen de ofertas" className="aside-img"/>
            <span onClick={handleLeft}><ArrowLeft clase={"aside-arrowLeft"} /></span>
            <span onClick={handleRight}><ArrowRight  clase={"aside-arrowRight"}/></span>
            <ul>
                <li onClick={() => setUrl(aside1)} className={url === aside1 ? "aside-li--active" : undefined  }></li>
                <li onClick={() => setUrl(aside2)} className={url === aside2 ? "aside-li--active" : undefined  }></li>
                <li onClick={() => setUrl(aside3)} className={url === aside3 ? "aside-li--active" : undefined  }></li>
                <li onClick={() => setUrl(aside4)} className={url === aside4 ? "aside-li--active" : undefined  }></li>
                <li onClick={() => setUrl(aside5)} className={url === aside5 ? "aside-li--active" : undefined  }></li>
            </ul>
        </aside>
    )
}

export default Aside