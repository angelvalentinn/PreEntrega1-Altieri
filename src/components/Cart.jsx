import { Link } from "react-router-dom";

const Cart = () => {

    return (
        <>
            <div className="wrapper-carrito">
                <div className="carrito-vacio">
                    <Link to="/" className="cart-back-list"><p>Lista de productos</p></Link>
                    <h3>¡ Su carrito está vacío !</h3>
                </div>
            </div>
        </>
    );
};

export default Cart;
