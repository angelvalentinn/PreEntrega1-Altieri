import CartWidget from './CartWidget';
import logo from "../assets/header-imgs/logo.png"
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
                    <img src={logo} onClick={() => setMenu(true)} alt="Logo" className="logo" />
                </Link>

                <div className="entrada">
                    <input type="text" placeholder="Estoy buscando..." />
                    <i className="bi bi-search lupa"></i>
                </div>

                <img srcSet={sale} alt="" className="msg-sale" />

                <i className="bi bi-list bars" onClick={handleMenu}></i>

                <Link to='/cart' className='cart-mobile' onClick={() => setMenu(true)}><CartWidget clase={'cart-container'} clase2={'cart-mobile'} /></Link>

                <p className="msg-ubicacion">
                    <i className="bi bi-geo-alt location"></i>
                    <span className="ubicacion-text">Enviar a<span>Buenos Aires 1825</span></span>
                </p>

                <nav className={menu ? "disabled-nav nav" : "show-nav nav"}>
                    <ul className="nav-ul">
                        <li className="li-categoria">
                            Categorías
                            <div className="submenu">
                                <ul>
                                    <Link to='/productos/juegos' onClick={() => setMenu(true)}><li>Juegos</li></Link>
                                    <Link to='/productos/electrodomesticos' onClick={() => setMenu(true)}><li >Electrodomesticos</li></Link>
                                    <Link to='/productos/alcohol' onClick={() => setMenu(true)}><li>Alcohol</li></Link>
                                    <Link to='/' onClick={() => setMenu(true)}><li>Todos</li></Link>
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
                    <li><i className="bi bi-person user-icon"></i>User..</li>
                    <li>Mis compras</li>
                    <li>Favoritos</li>
                    <li className="li-bell"><i className="bi bi-bell bell"></i></li>
                    <Link to="/cart" ><li className="li-cart"><CartWidget clase={'cart-container'} clase2={'cart'} /></li></Link>
                </ul>
            </div>
        </header>
    )
}

export default Navbar;