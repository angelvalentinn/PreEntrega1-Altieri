import { useContext, useState } from "react";
import { auth,db } from "../firebase/firebase.config";
import { onAuthStateChanged,signOut } from "firebase/auth";
import { useForm } from 'react-hook-form'
import Login from "./Login";
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import Swal from 'sweetalert2'
import ItemListContainer from '../components/ItemListContainer'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import { CartContext } from '../context/CartContext';

const Checkout = () => {

    const [usuario, setUsuario] = useState(null);
    const [ordenId, setOrdenId] = useState(false);
    const { register, handleSubmit } = useForm();

    const { cart, totalCart, vaciarCart } = useContext(CartContext);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUsuario(true);
        }
    });

    const enviar = data => {
        const orden = {
            carrito: cart,
            total: totalCart(),
            clienteData: data
        }

        const pedidosCollection = collection(db, 'pedidos')

        addDoc(pedidosCollection, orden)
            .then(doc => {
                Swal.fire({
                    title: '¡ Compra realizada con éxito !',
                    text: `Nro de Orden: *${doc.id}* `,
                    icon: 'success',
                    confirmButtonColor: 'var(--clr-blue)',
                    confirmButtonText: 'OK',
                    customClass: {
                        title: 'swal-title'
                    }
                })
                vaciarCart();
                setOrdenId(doc.id)

            })
        cart.forEach((itemCart) => {
            const itemCartRefDB = doc(db,'productos',itemCart.id);
            updateStock(itemCartRefDB,itemCart)
        })

    }

    const updateStock = async (itemCartRefDB,itemCart) => {
        const itemCartDB =  await getDoc(itemCartRefDB);

        await updateDoc (itemCartRefDB, {
            stock: Number(itemCartDB.data().stock) - Number(itemCart.cantidad) 
        })
    }

    const cerrarSesion = () => {
        setUsuario(null)
        signOut(auth).then(() => {

        }).catch(() => {
            alert("sucedio un error al desloguearse")
        });
    }

    const handleCerrarSesion = () => {

        Swal.fire({
            title: '¿Seguro quieres cerrar sesión?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'No',
            confirmButtonText: 'Si',
        }).then((result) => {
            if (result.isConfirmed) {
                cerrarSesion()
                Toastify({
                    text: `¡ Sesión cerrada con éxito !`,
                    duration: 4000,
                    close: false,
                    gravity: 'top',
                    position: 'left',
                    style: {
                        background: `var(--clr-red)`,
                        fontSize: "0.8rem",
                        color: '#fff'
                    }
                }).showToast()
            }

        })
    }

    if (ordenId) return <ItemListContainer></ItemListContainer>

    if (usuario == null) return (<Login />)

    return (
        <>
            <main className='checkout-main'>
                <section className='checkout'>
                    <form className='checkout-form' onSubmit={handleSubmit(enviar)}>
                        <h1>Completá tus datos para realizar la compra</h1>
                        <div className='container-inputs'>
                            <div className='form-group'>
                                <input type="text" name='nombre' placeholder=' '  {...register('nombre')} />
                                <label htmlFor="name">Nombre</label>
                            </div>
                            <div className='form-group'>
                                <input type="text" name='email' placeholder=' '  {...register('email')} />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className='form-group'>
                                <input type="text" name='celular' placeholder=' '  {...register('celular')} />
                                <label htmlFor="cel">Celular</label>
                            </div>
                            <div className='form-group'>
                                <input type="text" name='direccion' placeholder=' ' {...register('direccion')} />
                                <label htmlFor="direc">Dirección</label>
                            </div>
                        </div>
                        <div className="botones">
                            <button type='submit'>Finalizar Compra</button>
                            <button type='button' className="logout" onClick={handleCerrarSesion}><i className="bi bi-box-arrow-left"></i>Cerrar Sesión</button>
                        </div>
                    </form>
                </section>
            </main>

        </>
    );
};

export default Checkout;
