import { useState } from "react";
import { auth } from "../firebase/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import Login from "./Login";
import Toastify from 'toastify-js'  
import "toastify-js/src/toastify.css"
import { signOut } from "firebase/auth";

const Checkout = () => {

    const [dataForm, setDataForm] = useState({
        nombre: "",
        email: "",
        celular: "",
        direccion: "",
    });

    const [usuario, setUsuario] = useState(null);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUsuario(true);
        } 
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(dataForm);
    };

    const handleDataForm = (e,currentDataForm) => {
        const newDataForm = { ...currentDataForm };
        setDataForm({ ...newDataForm, [e.target.name]: e.target.value });
    };

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

    return (
        <>
            {usuario ? (
                <main className='checkout-main'>
                <section className='checkout'>
                    <form className='checkout-form' onSubmit={handleSubmit}>
                        <h1>Completá tus datos para realizar la compra</h1>
                        <div className='container-inputs'>
                            <div className='form-group'>
                                <input type="text" name='nombre' placeholder=' ' value={dataForm.nombre} onChange={ (e) => handleDataForm(e,dataForm) } />
                                <label htmlFor="name">Nombre</label>
                            </div>
                            <div className='form-group'>
                                <input type="text" name='email' placeholder=' ' value={dataForm.email} onChange={(e) => handleDataForm(e,dataForm)} />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className='form-group'>
                                <input type="text" name='celular' placeholder=' ' value={dataForm.celular} onChange={(e) => handleDataForm(e,dataForm)} />
                                <label htmlFor="cel">Celular</label>
                            </div>
                            <div className='form-group'>
                                <input type="text" name='direccion' placeholder=' ' value={dataForm.direccion} onChange={(e) => handleDataForm(e,dataForm)} />
                                <label htmlFor="direc">Dirección</label>
                            </div>
                        </div>
                        <div className="botones">
                            <button type='submit'>Finalizar Compra</button>
                            <button className="logout" onClick={cerrarSesion}><i className="bi bi-box-arrow-left"></i>Cerrar Sesión</button>
                        </div>
                    </form>
                </section>
            </main>
            ) : (
                <Login />
            )}
        </>
    );
};

export default Checkout;
