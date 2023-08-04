import React from 'react'

const Checkout = () => {
  return (
    <main className='checkout-main'>
        <section className='checkout'>
            <form className='checkout-form'>
                <h1>Completá tus datos</h1>
                <div className='container-inputs'>
                    <div className='form-group'>
                        <input type="text" id='name' placeholder=' '/>
                        <label htmlFor="name">Nombre</label>
                    </div>
                    <div className='form-group'>
                        <input type="text" id='email' placeholder=' '/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className='form-group'>
                        <input type="text" id='cel' placeholder=' '/>
                        <label htmlFor="cel">Celular</label>
                    </div>
                    <div className='form-group'>
                        <input type="text" id='direc' placeholder=' '/>
                        <label htmlFor="direc">Dirección</label>
                    </div>
                </div>   
                <button type='submit'>Enviar</button>
            </form>
        </section>
    </main>
  )
}

export default Checkout