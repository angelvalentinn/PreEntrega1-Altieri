import imgg from "../assets/imgs-products-ml/bebidas-alcoholicas/blue-label/blue-label-1.webp";
import imggg from "../assets/imgs-products-ml/bebidas-alcoholicas/blue-label/blue-label-4.webp";

const ItemDetailContainer = () => {
  return (
    <section className="wrapperDetail">
        <div className="itemDetailContainer">
            <section className="imgs">
                <img src={imgg}/>
                <img src={imgg}/>
                <img src={imgg}/>
            </section>

            <img src={imggg} className="img-deploy"/>

            <section className="item-texts">
                <span className="item-name">
                    <p>Nuevo | +5mil vendidos</p>
                    <h2>Johnnie Walker Blue Label X750cc</h2>
                </span>
                    
                <div className="item-price">
                    <p>$113.851</p>
                    <span>en 12x $19360</span>
                </div>

                <div className="item-description">
                    <ul>
                        <li>Origen: Escocia.</li>
                        <li>Presentación en estuche.</li>
                        <li>40% de graduación alcohólica.</li>
                        <li>Beber con moderación. Prohibida su venta a menores de 18 años.</li>
                    </ul>
                </div>
            </section>

            <section className="item-buy">
                <p className="text">Stock disponible</p>
                <div className="cantidad">
                    <button>+</button>
                    <p>0</p>
                    <button>-</button>
                </div>
                <button>Agregar al carrito</button>
            </section>
        </div>
    </section>
  )
}

export default ItemDetailContainer