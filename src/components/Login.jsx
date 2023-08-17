import { useState } from "react"
import { auth } from "../firebase/firebase.config"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

const Login = () => {

    const [registrando, setRegistrando] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        contraseña: ""
    })

    const autentication = (e,currentData) => {
        e.preventDefault();
        ingresarPorForm(currentData)
    }

    const ingresarPorForm = currentData => {
        if (registrando) {
            createUserWithEmailAndPassword(auth, currentData.email, currentData.contraseña)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...
                    alert("cuenta creada")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage)
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
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        alert(errorCode, errorMessage)
                    });

            } catch {
                alert("datos erroneos")
            }
        }
    }

    const handleDataForm = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    return (
        <main className='checkout-main'>
            <section className='checkout'>
                <form className='checkout-form' onSubmit={(e) => autentication(e,formData)}>
                    <h1>{registrando ? "Registrate" : "Inicia Sesión"}</h1>
                    <div className='container-inputs'>
                        <div className='form-group'>
                            <input type="text" name='email' id="email" placeholder=' ' value={formData.email} onChange={handleDataForm} />
                            <label htmlFor="name">Email</label>
                        </div>
                        <div className='form-group'>
                            <input type="password" name='contraseña' id="contraseña" placeholder=' ' value={formData.contraseña} onChange={handleDataForm} />
                            <label htmlFor="email">Password</label>
                        </div>
                    </div>
                    <div className="botones">
                        <button type='submit'>{registrando ? "Registrate" : "Inicia sesion"}</button>
                        <p>{registrando ? "Si ya tenes cuenta" : "Si no tenes cuenta"} <span onClick={() => setRegistrando(!registrando)}>{registrando ? "Inicia Sesión" : "Registrate"}</span></p>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default Login