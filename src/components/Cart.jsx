import imgPrueba from '../assets/imgs-products-ml/bebidas-alcoholicas/blue-label/blue-label-2.webp';

const Cart = () => {
    return (
    <div className="wrapper-carrito">
        <section className="carrito-container">
            
            <div className="carrito-items">
                <h6>Tus productos</h6>
                <div className="carrito-item">
                    <div className="carrito-grid">
                        <img src={imgPrueba} alt="" />
                        <p className="item-name">
                            Kit Eco Hair Shampoo Anticaída + Loción Crecimiento
                        </p>
                        <button>Eliminar</button>
                        <div className="item-buttons">
                            <button>+</button>
                            <span>1</span>
                            <button>-</button>
                        </div>
                        <p className="item-price">$8976</p>
                    </div>
                </div>

            </div>

            <div className="carrito-compra">
                <h6>Resumen de compra</h6>
                <p className="carrito-compra-text">Productos <span>(2)</span></p>
                <p className="carrito-compra-total">
                    Total <span>$12300</span>
                </p>
                <button className="carrito-compra-comprar">Comprar</button>
            </div>
        </section>
    </div>
    );
};

export default Cart;
