import Card from './Card'
import { useState, useEffect, useContext } from 'react';
import ItemList from './ItemList';
import Aside from './Aside';
import { pedirData } from '../helpers/pedirData';
import { useParams } from 'react-router-dom';
import { shuffleArray } from '../helpers/shuffleData';
import { CartContext } from '../context/CartContext';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const { categoria } = useParams();
    const { setCantidad } = useContext(CartContext);

    useEffect( () => {
        pedirData("../../src/data/productos.json")
            .then(data => {
                categoria ? setProductos( data.filter(producto => producto.category.toLocaleLowerCase() === categoria.toLocaleLowerCase()) )
                          : setProductos( shuffleArray(data) )
            })
    },[categoria]);  

    useEffect( () => {
        return () => setCantidad(1)
    },[])

    return (
        <>
            <Aside />       
            <main className='items-container'>
                <Card />
                <ItemList productos={productos}/>
            </main>
        </>
    )
}

export default ItemListContainer;