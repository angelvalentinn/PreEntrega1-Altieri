import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import emptyCart from '../assets/empty-cart.png'

const Cart = () => {

    const { cart, counter, totalCart, vaciarCart, eliminarItem, setCart, handleSumarProductoEnCart, handleRestarProductoEnCart} = useContext(CartContext);

    return (
        <>
            <div className="wrapper-carrito">
                {counter() == 0 ? (
                    <div className="carrito-vacio">
                        <Link to="/" className="cart-back-list">
                            <p>Lista de productos</p>
                        </Link>
                        <img src={emptyCart} alt="" />
                        <h3>¡ Su carrito está vacío !</h3>
                    </div>
                ) : (
                    <section className="carrito-container">
                        <div className="carrito-items">
                            <h6>Tus productos</h6>
                            <p className="vaciar-carrito" onClick={vaciarCart}>
                                Vaciar Carrito
                            </p>
                            {cart.map((item) => {
                                const { name, cantidad, imgs, price, id, stock } = item;

                                return (
                                    <div key={id} className="carrito-item">
                                        <div className="carrito-grid">
                                            <img src={imgs[0]} alt={name} />
                                            <p className="item-name">{name}</p>
                                            <button onClick={() => eliminarItem(id)}>Eliminar</button>
                                            <div className="cantidades">
                                                <div className="item-buttons">
                                                    <button
                                                        className="button-increment"
                                                        onClick={() => handleSumarProductoEnCart(item)}
                                                    >
                                                        <span>+</span>
                                                    </button>
                                                    <span className="cart-cantidad">{cantidad}</span>
                                                    <button
                                                        className="button-decrement"
                                                        onClick={() => handleRestarProductoEnCart(item)}
                                                    >
                                                        <span>-</span>
                                                    </button>
                                                </div>
                                                <span className="disponibles">{stock} disponibles</span>
                                            </div>
                                            <p className="item-price">${price * cantidad}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="carrito-compra">
                            <h6>Resumen de compra</h6>
                            <p className="carrito-compra-text">
                                Productos <span>({counter()})</span>
                            </p>
                            <p className="carrito-compra-total">
                                Total <span>${totalCart()}</span>
                            </p>
                            <Link to="/checkout" className="carrito-compra-comprar">
                                Comprar
                            </Link>
                        </div>
                    </section>
                )}
            </div>
        </>
    );
};

export default Cart;
