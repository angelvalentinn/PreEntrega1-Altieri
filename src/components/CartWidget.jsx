import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    return ( 
        <div className='cart-container'>
            <FontAwesomeIcon icon={faCartShopping}  className='cart'/>
            <span className='cart-numerito'>0</span>
        </div>
    )
}

export default CartWidget