import { useState } from "react";
import CheckoutModal from "./CheckoutModal";
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

    const handleDataForm = (e) => {
        const newDataForm = { ...dataForm };
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
                <CheckoutModal handleDataForm={handleDataForm} handleSubmit={handleSubmit} dataForm={dataForm} signOut={signOut} cerrarSesion={cerrarSesion} />
            ) : (
                <Login />
            )}
        </>
    );
};

export default Checkout;
