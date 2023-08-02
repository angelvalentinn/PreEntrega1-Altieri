import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartWidget = ({clase,clase2}) => {
    const { counter } = useContext(CartContext);
    
    return ( 
        <div className={clase}>
            <i className={`bi bi-cart ${clase2}`}></i>
            <span className='cart-numerito'>{counter()}</span>
        </div>
    )
}

export default CartWidget