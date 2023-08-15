import React from 'react'

const Login = () => {
    return (
    <main className='checkout-main'>
        <section className='checkout'>
            <form className='checkout-form'>
                <h1>Inicia sesion para realizar tu compra</h1>
                <div className='container-inputs'>
                    <div className='form-group'>
                        <input type="text" name='nombre' placeholder=' ' required/>
                        <label htmlFor="name">Nombre</label>
                    </div>
                    <div className='form-group'>
                        <input type="text" name='email' placeholder=' ' required />
                        <label htmlFor="email">Email</label>
                    </div>
                </div>   
                <button type='submit'>Iniciar sesion</button>
            </form>
        </section>
    </main>
    )
}

export default Login