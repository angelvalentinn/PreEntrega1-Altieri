import { createContext, useEffect, useState } from "react";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

export const CartContext = createContext();

const cartt = JSON.parse( localStorage.getItem("cart") ) || [];

export const CartProvider = ( {children} ) => { 

    const [cart, setCart] = useState(cartt);

    const handleAgregar = (item,cantidad) =>  {

        const newCart = [...cart];
        const itemRepeat = newCart.find(itemCart => itemCart.id == item.id);

        itemRepeat ? itemRepeat.cantidad += cantidad
                   : newCart.push({...item, cantidad})
        
        setCart( newCart )

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

    const counter = () => cart.reduce( (acc,item) => item.cantidad + acc, 0 )

    const vaciarCart = () => setCart([])

    const totalCart = () => cart.reduce( (acc,item) => ( item.cantidad * item.price ) + acc, 0 )

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

    useEffect( () => localStorage.setItem("cart",JSON.stringify( cart )) , [cart] )

    return (
        <CartContext.Provider value={ {cart,handleAgregar,counter,totalCart,vaciarCart,eliminarItem} }>
            {children}
        </CartContext.Provider>
    )

}