import Card from './Card'
import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import Aside from './Aside';
import { pedirData } from '../helpers/pedirData';
import { useParams } from 'react-router-dom';
import { shuffleArray } from '../helpers/shuffleData';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const { categoria } = useParams();

    useEffect( () => {
        pedirData("../../src/data/productos.json")
            .then(data => {
                categoria ? setProductos( data.filter(producto => producto.category.toLocaleLowerCase() === categoria.toLocaleLowerCase()) )
                          : setProductos( shuffleArray(data) )
            })
    },[categoria]);

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