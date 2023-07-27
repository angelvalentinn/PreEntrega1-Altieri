import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { pedirData, pedirDataPorId } from "./helpers/pedirData";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    
    const [productos, setProductos] = useState(null);
    const id = useParams().id;
    const [item, setItem] = useState(null);

    useEffect(() => {
        pedirData("../../src/data/productos.json")
            .then(data => setProductos(data))        
        
    },[]);

    useEffect(() => {
        if(productos) setItem( pedirDataPorId(productos, id) )
    }, [productos, id]);
    
    return (
        <>
           { item && <ItemDetail item={item}/> }
        </>
    )
}

export default ItemDetailContainer