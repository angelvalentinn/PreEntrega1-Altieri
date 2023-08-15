import { useState } from "react";
import CheckoutModal from "./CheckoutModal";
import Login from "./Login";

const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        nombre: "",
        email: "",
        celular: "",
        direccion: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(dataForm);
    };

    const handleDataForm = (e) => {
        const newDataForm = { ...dataForm };
        setDataForm({ ...newDataForm, [e.target.name]: e.target.value });
    };

    return (
        <div className="checkout-choise-login">
            <h2>Para terminar la compra inicie sesión</h2>
            <div className="checkout-buttons">
                <button className="iniciar-sesion">Iniciar sesión</button>
                <span>o</span>
                <button className="crear-cuenta">Crear cuenta</button>
                <span>o</span>
                <button className="iniciar-google"><i className="bi bi-google"></i>Ingresar con Google</button>
            </div>
        </div>
    );
};

export default Checkout;
