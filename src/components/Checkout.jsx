import { useContext, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { useForm } from 'react-hook-form'
import Login from "./Login";
import { collection, addDoc } from 'firebase/firestore'
import { db } from "../firebase/firebase.config";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { signOut } from "firebase/auth";
import Swal from 'sweetalert2'
import ItemListContainer from '../components/ItemListContainer'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import { CartContext } from '../context/CartContext';

const Checkout = () => {

    const [usuario, setUsuario] = useState(null);
    const [ordenId, setOrdenId] = useState(false);
    const { register, handleSubmit } = useForm();

    const { cart, totalCart,vaciarCart } = useContext(CartContext);

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

    }

    const cerrarSesion = () => {
        setUsuario(null)
        signOut(auth).then(() => {
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
    
        }).catch(() => {
            alert("sucedio un error al desloguearse")
        });
    }

    if(ordenId) {
        return (
            <ItemListContainer></ItemListContainer>
        )
    }

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
                            <button type='button' className="logout" onClick={cerrarSesion}><i className="bi bi-box-arrow-left"></i>Cerrar Sesión</button>
                        </div>
                    </form>
                </section>
            </main>

        </>
    );
};

export default Checkout;
