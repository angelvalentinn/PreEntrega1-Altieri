import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartWidget = ({clase,clase2}) => {

    return ( 
        <div className={clase}>
            <FontAwesomeIcon icon={faCartShopping}  className={clase2}/>
            <span className='cart-numerito'>0</span>
        </div>
    )
}

export default CartWidget