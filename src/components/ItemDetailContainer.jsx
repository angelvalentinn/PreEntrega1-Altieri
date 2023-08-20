import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.config";
import Error from '../components/Error'

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [error, setError] = useState(false)

    useEffect(() => {
        const docRef = doc(db,"productos",id)
        pedirItem(docRef);
    }, []);

    const pedirItem = async docRef => {
        let snapshot = await getDoc(docRef);
        
        !snapshot.data() && setError(true)
        
        setItem( {...snapshot.data(), id:snapshot.id} );
    }

    if (error) return <Error errorType={'not-found-item'}/>

    return (
        <div style={{display: 'grid', placeItems: 'center', minHeight: '80vh', background: 'var(--clr-g)'}}>
            {item == null ? <Loading /> : <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer