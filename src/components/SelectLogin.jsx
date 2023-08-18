import Toastify from 'toastify-js'  
import "toastify-js/src/toastify.css"
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();
import { signInWithPopup } from "firebase/auth";

const SelectLogin = () => {

    const ingresarConGoogle = () => {

        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const userName = result.user.displayName;
                // IdP data available using getAdditionalUserInfo(result)
                Toastify({
                    text: `¡ Inicio de sesión éxitoso ! Hola ${userName}`,
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
    
    return (
        <div className="checkout-choise-login">
            <h2>Para realizar tu compra necesitas estar logueado</h2>
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

            </div>
        </div>
    )
}

export default SelectLogin