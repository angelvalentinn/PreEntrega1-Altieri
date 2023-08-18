import Card from './Card'
import { useState, useEffect, useContext } from 'react';
import ItemList from './ItemList';
import Aside from './Aside';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase.config";
import Loading from './Loading';

const ItemListContainer = () => {

    const [ productos, setProductos ] = useState([]);
    const { categoria } = useParams();
    const { setCantidad } = useContext(CartContext);
    
    useEffect(() => {

        setProductos([]);

        const productosDB = collection(db, "productos");

        const q = categoria ? query(productosDB, where("category", "==" , categoria)) : productosDB;

        getDocs(q)
            .then((snapshot) => {
                setProductos(
                    snapshot.docs.map(doc => {
                        return { ...doc.data(), id:doc.id }
                    })
                )
            })

    }, [categoria]);

    useEffect(() => {
        return () => setCantidad(1)
    }, [])

    return (
        <>
            <Aside />
            <main className='items-container'>
                <Card /> 
                {productos.length == 0 ? <Loading></Loading>
                    : <ItemList productos={productos} />  
                }
                
            </main>
        </>
    )
}

export default ItemListContainer;