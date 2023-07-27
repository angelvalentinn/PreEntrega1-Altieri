import { useEffect } from "react";
import Card from "./Card"
import { useState } from "react";
import ItemList from "./ItemList";
import Aside from "./Aside";
import { pedirData } from "./helpers/pedirData";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    useEffect( () => {
        pedirData("../../src/data/productos.json")
            .then(data => setProductos(data));
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