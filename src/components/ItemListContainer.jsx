import { useEffect } from "react";
import Card from "./Card"
import { useState } from "react";
import ItemList from "./ItemList";
import Aside from "./Aside";

const ItemListContainer = () => {

    const [productos, setProductos] = useState({});

    const pedirData = async url => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setProductos(data);
        } catch(e) {
            console.log(e);
        }
        
    }
    
    useEffect( () => {
        pedirData("../../src/data/productos.json");
    },[]);

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