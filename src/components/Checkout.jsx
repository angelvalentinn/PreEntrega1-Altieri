import { useState } from "react";
import CheckoutModal from "./CheckoutModal";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase.config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();
import { signInWithPopup } from "firebase/auth";


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
            console.log(user);
            setUsuario(true);
        } else {
            console.log("no hay usuario");
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

    const ingresarConGoogle = () => {

        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                alert(result.user.displayName)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                alert(errorCode, errorMessage)
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    const cerrarSesion = () => {
        setUsuario(null)
        signOut(auth).then(() => {
            alert("deslogueo correcto")
        }).catch(() => {
            alert("sucedio un error al desloguearse")
        });
    }

    return (
        <>
            {usuario ? (
                <CheckoutModal handleDataForm={handleDataForm} handleSubmit={handleSubmit} dataForm={dataForm} signOut={signOut} cerrarSesion={cerrarSesion} />
            ) : (
                <div className="checkout-choise-login">
                    <h2>Terminá tu compra</h2>
                    <div className="checkout-buttons">
                        <Link to="/login"><button className="iniciar-sesion">Iniciar sesión</button></Link>
                        <div className="division">
                            <p className="border-o-left"></p>
                            <span>o</span>
                            <p className="border-o-right"></p>
                        </div>
                        <button className="iniciar-google" onClick={ingresarConGoogle}>
                            <i className="bi bi-google"></i>Ingresar con Google
                        </button>
                        <div className="division">
                            <p className="border-o-left"></p>
                            <span>o</span>
                            <p className="border-o-right"></p>
                        </div>
                        <button className="iniciar-google" onClick={() => signOut(auth)}>
                            <i className="bi bi-box-arrow-left"></i>Cerrar Sesión
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Checkout;
