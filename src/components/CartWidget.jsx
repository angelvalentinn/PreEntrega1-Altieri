import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartWidget = ({clase,clase2}) => {
    const { counter } = useContext(CartContext);
    
    return ( 
        <div className={clase}>
            <FontAwesomeIcon icon={faCartShopping}  className={clase2}/>
            <span className='cart-numerito'>{counter()}</span>
        </div>
    )
}

export default CartWidget