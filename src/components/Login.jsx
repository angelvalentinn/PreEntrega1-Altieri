import { useEffect, useState } from "react"
import Toastify from 'toastify-js'  
import "toastify-js/src/toastify.css"
import { auth } from "../firebase/firebase.config"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import Checkout from "./Checkout"
import CheckoutModal from "./CheckoutModal"

const Login = () => {

    const [registrando, setRegistrando] = useState(false);
    const [errores,setErrores] = useState('');

    const [usuario, setUsuario] = useState(null);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUsuario(true);
        } 
    });

    const [formData, setFormData] = useState({
        email: "",
        contraseña: ""
    })

    const autentication = (e, currentData) => {
        e.preventDefault();
        ingresarPorForm(currentData)
    }

    const ingresarPorForm = currentData => {
        if (registrando) {
            createUserWithEmailAndPassword(auth, currentData.email, currentData.contraseña)
                .then((userCredential) => {
                    // Signed in 
                    const userName = userCredential.user.email.split('@')[0];
                    // ...
                    Toastify({
                        text: `¡ Cuenta creada con éxito. Hola ${userName}`,
                        duration: 4000,
                        close: false,
                        gravity: 'top',
                        position: 'left',
                        style: {
                            background: `var(--clr-green)`,
                            fontSize: "0.8rem",
                            color: '#fff'
                        }
                    }).showToast()
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    setErrores(errorMessage)
                });
        } else {
            try {

                signInWithEmailAndPassword(auth, currentData.email, currentData.contraseña)
                    .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        // ...
                        alert(user.email)
                    })
                    .catch((error) => {
                        const errorMsg = error.message;
                        setErrores(errorMsg)
                    });

            } catch {
                alert("datos erroneos")
            }
        }
    }


    useEffect( () => {
        const sto = setTimeout( () => {
            setErrores('')
        },2000)

        return () => clearTimeout(sto)
    },[errores])

    const handleDataForm = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <>
            {usuario ? <Checkout />
                    : <CheckoutModal />}
        </>
    )
}

export default Login