import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

const celular = +541165075228;

const ItemDetail = ({ item }) => {

    const { name, sold, price, description, imgs, stock }  = item;
    const [srcImg, setSrcImg] = useState(imgs[0]);

    const [cantidad, setCantidad] = useState(1);

    const handleSumar = () => cantidad < stock && setCantidad(cantidad + 1);

    const handleRestar = () => cantidad > 1 && setCantidad(cantidad - 1);

    const { handleAgregar } = useContext(CartContext);

    const askToWhatsapp = (nameProduct,priceProduct) => {
        /* el método encodeURIComponent recibe un string y verifica que los carácteres sean aptos para enviarse por url
           en caso contrario los cambia por carácteres válidos en url, ejemplo: el espacio se cambia por %20*/
        const link = `https://wa.me/${celular}?text=${encodeURIComponent("Hola, estoy interesado en ")}
                      *${encodeURIComponent(nameProduct)}*,${encodeURIComponent(" que tiene un precio de ")}
                      *${encodeURIComponent(priceProduct)}*.${encodeURIComponent(" ¡Muchas gracias!")}`;
        window.open(link, "_blank");
    }

    return (
    <section className="wrapperDetail">
            <Link to={`/`} className="detail-back" ><span>Volver al Listado</span></Link>
            <div className="itemDetailContainer">
                <section className="imgs">
                    {imgs.map(img => 
                        <img 
                        key={img}
                        srcSet={img} 
                        alt={name} 
                        onMouseEnter={() => setSrcImg(img)}
                        className={img === srcImg ? "img--active" : undefined}       
                        />)
                    }
                </section>

                <img src={srcImg} className="img-deploy"/>

                <section className="item-texts">
                    <span className="item-name">
                        <p>Nuevo | +{sold} vendidos</p>
                        <h2>{name}</h2>
                    </span>
                        
                    <div className="item-price">
                        <p>${price}</p>
                        <span>en 12x de ${Math.round( ( (price*0.30) / 12) )}</span>
                    </div>

                    <div className="item-description">
                        <ul>
                            {description.map(item => {
                                return (
                                    <li key={item}>{item}</li>
                                )
                            })}
                        </ul>
                    </div>
                </section>

                <section className="item-buy">
                    <p className="text">Stock disponible <span>({stock})</span></p>
                    <ItemCount cantidad={cantidad} handleRestar={handleRestar} handleSumar={handleSumar} stock={stock}/>
                    <div className="buttons">
                        <button onClick={ () => handleAgregar(item,cantidad) }>Agregar al carrito</button>
                        <button className="button-what" onClick={ () => askToWhatsapp(name,price) }><i class="bi bi-whatsapp"></i>WhatsApp</button>
                    </div>
                    
                </section>
            </div>
    </section>
  )
}

export default ItemDetail