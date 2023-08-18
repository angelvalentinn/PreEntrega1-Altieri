import { useState } from "react";
import CheckoutModal from "./CheckoutModal";
import Toastify from 'toastify-js'  
import "toastify-js/src/toastify.css"
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase.config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();
import { signInWithPopup } from "firebase/auth";
import SelectLogin from "./SelectLogin";


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
                text: `¡ Deslogueo con éxito !`,
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
            return (
                <Checkout />
            )
        }).catch(() => {
            alert("sucedio un error al desloguearse")
        });
    }

    return (
        <>
            {usuario ? (
                <CheckoutModal handleDataForm={handleDataForm} handleSubmit={handleSubmit} dataForm={dataForm} signOut={signOut} cerrarSesion={cerrarSesion} />
            ) : (
                <SelectLogin />
            )}
        </>
    );
};

export default Checkout;
