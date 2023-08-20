import { useEffect, useState } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { useForm } from 'react-hook-form';
import { auth } from "../firebase/firebase.config";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";
const provider = new GoogleAuthProvider();
import Checkout from "./Checkout";

const Login = () => {

    const [registrando, setRegistrando] = useState(false);
    const [errores, setErrores] = useState("");
    const [usuario, setUsuario] = useState(null);

    const {register,handleSubmit} = useForm();

    onAuthStateChanged( auth, (user) => user && setUsuario(true) )

    const enviar = data => ingresarPorForm(data);

    const ingresarPorForm = (currentData) => {
        if (registrando) {
            createUserWithEmailAndPassword(
                auth,
                currentData.email,
                currentData.contraseña
            )
                .then((userCredential) => {
                    // Signed in
                    const userName = userCredential.user.email.split("@")[0];
                    // ...
                    Toastify({
                        text: `¡ Cuenta creada con éxito. Hola ${userName}`,
                        duration: 4000,
                        close: false,
                        gravity: "top",
                        position: "left",
                        style: {
                            background: `var(--clr-green)`,
                            fontSize: "0.8rem",
                            color: "#fff",
                        },
                    }).showToast();
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    setErrores(errorMessage);
                });
        } else {
            try {
                signInWithEmailAndPassword(
                    auth,
                    currentData.email,
                    currentData.contraseña
                )
                    .then((userCredential) => {
                        // Signed in
                        const userName = userCredential.user.email.split('@')[0];
                        // ...
                        Toastify({
                            text: `¡ Inicio de sesión éxitoso ! Hola ${userName}`,
                            duration: 4000,
                            close: false,
                            gravity: "top",
                            position: "left",
                            style: {
                                background: `var(--clr-green)`,
                                fontSize: "0.8rem",
                                color: "#fff",
                            },
                        }).showToast();
                    })
                    .catch((error) => {
                        const errorMsg = error.message;
                        setErrores(errorMsg);
                    });
            } catch {
                alert("datos erroneos");
            }
        }
    };

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
                    gravity: "top",
                    position: "left",
                    style: {
                        background: `var(--clr-green)`,
                        fontSize: "0.8rem",
                        color: "#fff",
                    },
                }).showToast();
                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode, errorMessage);
            });
    };

    useEffect(() => {
        const sto = setTimeout(() => setErrores("") ,  2000);

        return () => clearTimeout(sto);
    }, [errores]);

    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <>
            {usuario ? (
                <Checkout />
            ) : (
                <main className="checkout-main">
                    <section className="checkout">
                        <form
                            className="checkout-form"
                            onSubmit={handleSubmit(enviar)}
                        >
                            <div className="checkout-form-texts">
                                <h1>{registrando ? "Registrate" : "Inicia Sesión"}</h1>
                                <p className="msg-errors">{errores != "" && errores}</p>
                            </div>
                            <div className="container-inputs">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        placeholder=" "
                                        value="pepe@gmail.com"
                                        {...register('email')}
                                    />
                                    <label htmlFor="name">Email</label>
                                </div>
                                <div className="form-group">
                                    <input
                                        type={`${passwordVisible ? "text" : "password"}`}
                                        name="contraseña"
                                        id="contraseña"
                                        value="123456"
                                        placeholder=" "
                                        {...register('contraseña')}
                                    />
                                    <label htmlFor="email">Password</label>
                                    <i
                                        className={`bi ${passwordVisible ? "bi-eye-slash" : "bi-eye"
                                            }`}
                                        onClick={() => setPasswordVisible(!passwordVisible)}
                                    ></i>
                                </div>
                            </div>
                            <div className="botones">
                                <button type="submit">
                                    {registrando ? "Registrate" : "Inicia sesion"}
                                </button>
                                <p>
                                    {registrando ? "Si ya tenes cuenta" : "Si no tenes cuenta"}{" "}
                                    <span onClick={() => setRegistrando(!registrando)}>
                                        {registrando ? "Inicia Sesión" : "Registrate"}
                                    </span>
                                </p>
                            </div>
                        </form>
                        <div className="division">
                            <p className="border-o-left"></p>
                            <span>o</span>
                            <p className="border-o-right"></p>
                        </div>
                        <button className="iniciar-google" onClick={ingresarConGoogle}>
                            <i className="bi bi-google"></i>Ingresar con Google
                        </button>
                    </section>
                </main>
            )}
        </>
    );
};

export default Login;
