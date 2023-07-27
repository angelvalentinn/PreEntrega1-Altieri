import { useState } from "react";
import { Link } from "react-router-dom";
import whatsapp from '../assets/whatsapp.png';

const ItemDetail = ({item}) => {

    const { name, sold, price, description, imgs, stock }  = item;
    const [srcImg, setSrcImg] = useState(imgs[0]);

    return (
    <section className="wrapperDetail">
            <Link to='/' className="detail-back" ><span>Volver al Listado</span></Link>
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
                    <div className="cantidad">
                        <button>+</button>
                        <p>0</p>
                        <button>-</button>
                    </div>
                    <div className="buttons">
                        <button>Agregar al carrito</button>
                        <button className="button-what"><img src={whatsapp} alt="" />WhatsApp</button>
                    </div>
                    
                </section>
            </div>
        </section>
  )
}

export default ItemDetail