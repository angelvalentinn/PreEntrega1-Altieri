import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

const celular = +541165075228;

const ItemDetail = ({ item }) => {

    const { name, sold, price, description, imgs, stock, id }  = item;
    const [srcImg, setSrcImg] = useState(imgs[0]);

    const { handleAgregar, handleSumar, handleRestar, cantidad, cart } = useContext(CartContext);

    const askToWhatsapp = (nameProduct,priceProduct) => {
        /* el método encodeURIComponent recibe un string y verifica que los carácteres sean aptos para enviarse por url
        en caso contrario los cambia por carácteres válidos en url, ejemplo: el espacio se cambia por %20*/
        const link = `https://wa.me/${celular}?text=${encodeURIComponent("Hola, estoy interesado en ")}
                      *${encodeURIComponent(nameProduct)}*,${encodeURIComponent(" que tiene un precio de ")}
                      *$${encodeURIComponent(priceProduct)}*.${encodeURIComponent(" ¡Muchas gracias!")}`;
        window.open(link, "_blank");
    }

    const condition = cart.find(item => item.id == id);

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
                        <p className="text">{stock == 0 ? 'Sin stock' : 'Stock disponible'} <span>({stock})</span></p>
                        <ItemCount cantidad={cantidad} handleRestar={() => handleRestar(cantidad)} handleSumar={() => handleSumar(cantidad,stock)} stock={stock}/>
                        <div className="buttons">
                            <button onClick={ () => handleAgregar(item,cantidad) } style={{ opacity: condition || stock < 1 ? '0.2' : '1' ,cursor: condition || stock < 1 ? 'no-drop' : 'pointer'}} >Agregar al carrito</button>
                            <button className="button-what" onClick={ () => askToWhatsapp(name,price) }><i className="bi bi-whatsapp"></i>WhatsApp</button>
                        </div>
                        
                    </section>
                </div>
        </section>
    )
}

export default ItemDetail