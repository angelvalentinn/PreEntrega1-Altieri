import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faBell, faCartShopping, faMagnifyingGlass,faLocationDot } from '@fortawesome/free-solid-svg-icons';
import CartWidget from './CartWidget';
import logoDesktop from "../assets/header-imgs/logoDesktop.jpg";
import logoMobile from "../assets/header-imgs/logoMobile.png"
import sale from "../assets/header-imgs/sale.jpg";
import { Link } from "react-router-dom";
import { useState } from 'react';

const Navbar = () => {

    const [menu, setMenu] = useState(true);
    
    const handleMenu = () => setMenu(!menu);

    return (
    <header className="header">
        <div className="header-container">
            <Link to='/'>
                <picture onClick={ () => setMenu(true) }>
                    <source media="(max-width: 624px)" srcSet={logoMobile} />
                    <source media="(min-width: 625px)" srcSet={logoDesktop} />
                    <img srcSet={logoDesktop} alt="Logo" className="logo" />
                </picture>
            </Link>
            
            <div className="entrada">
                <input type="text" placeholder="Estoy buscando..." />
                <FontAwesomeIcon icon={faMagnifyingGlass}  className='lupa'/>
            </div>

            <img srcSet={sale} alt="" className="msg-sale" />

            <FontAwesomeIcon icon={faBars} className='bars' onClick={handleMenu}/>

            <Link to='/cart' className='cart-mobile' onClick={ () => setMenu(true) }><CartWidget  clase={'cart-container'} clase2={'cart-mobile'}/></Link>

            <p className="msg-ubicacion">
                <FontAwesomeIcon icon={faLocationDot}  className='location'/>
                <span className="ubicacion-text">Enviar a<span>Buenos Aires 1825</span></span>
            </p>

            <nav className={ menu ? "disabled-nav nav" : "show-nav nav"}>
                <ul className="nav-ul">
                    <li className="li-categoria">
                        Categorías
                        <div className="submenu">
                            <ul>
                                <Link to='/productos/juegos' onClick={ () => setMenu(true) }><li>Juegos</li></Link>
                                <li onClick={ () => setMenu(true) }>Electrodomesticos</li>
                                <Link to='/productos/alcohol' onClick={ () => setMenu(true) }><li>Alcohol</li></Link>
                                <Link to='/' onClick={ () => setMenu(true) }><li>Todos</li></Link>
                            </ul>
                        </div>
                    </li>
                    <li>Ofertas</li>
                    <li>Historial</li>
                    <li>Supermercado</li>
                    <li>Moda</li>
                    <li>Vender</li>
                    <li>Ayuda</li>
                </ul>
            </nav>
    
            <ul className="nav-secondary">
                <li><FontAwesomeIcon icon={faUser} className='user-icon' />User..</li>
                <li>Mis compras</li>
                <li>Favoritos</li>
                <li className="li-bell"><FontAwesomeIcon icon={faBell} className='bell' /></li>
                <Link to="/cart" ><li className="li-cart"><CartWidget clase={'cart-container'} clase2={'cart'} /></li></Link>
            </ul>
        </div>
    </header>
    )
}

export default Navbar;