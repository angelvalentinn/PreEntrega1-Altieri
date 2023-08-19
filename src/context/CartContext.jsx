import { createContext, useEffect, useState } from "react";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

export const CartContext = createContext();

const cartt = JSON.parse( localStorage.getItem("cart") ) || [];

export const CartProvider = ( {children} ) => { 

    const [cart, setCart] = useState(cartt);
    const [cantidad, setCantidad] = useState(1);

    const handleAgregar = (item,cantidad) =>  {
        
        if(item.stock < 1) {
            Toastify({
                text: '¡ No hay stock !',
                duration: 1800,
                close: true,
                gravity: 'bottom',
                position: 'center',
                style: {
                    background: `var(--clr-red)`,
                    fontSize: "0.8rem",
                    color: '#fff',
                    marginTop: '80vh'
                }
            }).showToast()
            return;
        }

        const newCart = [...cart];
        const itemRepeat = newCart.find(itemCart => itemCart.id == item.id);
        
        if(itemRepeat){
            Toastify({
                text: '¡ Este producto ya se encuentra en el carrito !',
                duration: 1800,
                close: true,
                gravity: 'bottom',
                position: 'center',
                style: {
                    background: `#fbb034`,
                    fontSize: "0.8rem",
                    color: '#fff',
                    marginTop: '80vh'
                }
            }).showToast()
        } else {
            newCart.push({...item, cantidad}) 
            Toastify({
                text: '¡Listo! Producto agregado',
                duration: 1800,
                close: true,
                gravity: 'bottom',
                position: 'center',
                style: {
                    background: `#000`,
                    fontSize: "0.8rem",
                    color: '#fff',
                    marginTop: '80vh'
                }
                }).showToast()
        }             
        
        setCart( newCart )
        setCantidad(1)
    }

    const counter = () => cart.reduce( (acc,item) => item.cantidad + acc, 0 )

    const vaciarCart = () => setCart([])

    const totalCart = () => cart.reduce( (acc,item) => ( item.cantidad * item.price ) + acc, 0 )

    const handleSumar = (cantidad,stock) => cantidad < stock && setCantidad(cantidad + 1);

    const handleRestar = (cantidad) => cantidad > 1 && setCantidad(cantidad - 1);

    const eliminarItem = id =>  {
        
        setCart( cart.filter(item => item.id != id) )
        
        Toastify({
            text: '¡Listo! Producto eliminado',
            duration: 1800,
            close: true,
            gravity: 'bottom',
            position: 'center',
            style: {
                background: `#000`,
                fontSize: "0.8rem",
                color: '#fff',
                marginTop: '80vh'
            }
        }).showToast()
    }

    const handleSumarProductoEnCart = (item) => {
        const newCart = [...cart]
        const p = newCart.find(i => i.id == item.id);
        if (p.cantidad < item.stock) p.cantidad = p.cantidad + 1
        setCart(newCart);
    };

    const handleRestarProductoEnCart = (item) => {
        const newCart = [...cart]
        const p = newCart.find(i => i.id == item.id);
        if (p.cantidad > 1) p.cantidad = p.cantidad - 1;
        setCart(newCart);
    };

    useEffect( () => localStorage.setItem("cart",JSON.stringify( cart )) , [cart] )

    return (
        <CartContext.Provider value={ {
            cart,
            setCart,
            handleAgregar,
            counter,
            totalCart,
            vaciarCart,
            eliminarItem,
            handleSumar,
            handleRestar,
            cantidad,
            setCantidad,
            handleRestarProductoEnCart,
            handleSumarProductoEnCart
            } }>
            {children}
        </CartContext.Provider>
    )

}