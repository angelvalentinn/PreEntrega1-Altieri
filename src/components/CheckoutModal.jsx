import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const CheckoutModal = ({ handleSubmit, handleDataForm, dataForm, cerrarSesion }) => {
    
    const {cart,vaciarCart} = useContext(CartContext);

    return (
        <main className='checkout-main'>
            <section className='checkout'>
                <form className='checkout-form' onSubmit={handleSubmit}>
                    <h1>Completá tus datos para realizar la compra</h1>
                    <div className='container-inputs'>
                        <div className='form-group'>
                            <input type="text" name='nombre' placeholder=' '  value={dataForm.nombre} onChange={handleDataForm} />
                            <label htmlFor="name">Nombre</label>
                        </div>
                        <div className='form-group'>
                            <input type="text" name='email' placeholder=' '  value={dataForm.email} onChange={handleDataForm} />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className='form-group'>
                            <input type="text" name='celular' placeholder=' '  value={dataForm.celular} onChange={handleDataForm} />
                            <label htmlFor="cel">Celular</label>
                        </div>
                        <div className='form-group'>
                            <input type="text" name='direccion' placeholder=' '  value={dataForm.direccion} onChange={handleDataForm} />
                            <label htmlFor="direc">Dirección</label>
                        </div>
                    </div>
                    <div className="botones">
                        <button type='submit'>Enviar</button>
                        <button className="logout" onClick={cerrarSesion}><i className="bi bi-box-arrow-left"></i>Cerrar Sesión</button>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default CheckoutModal