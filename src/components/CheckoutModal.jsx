const CheckoutModal = ({handleSubmit,handleDataForm,dataForm}) => {
  return (
    <main className='checkout-main'>
        <section className='checkout'>
            <form className='checkout-form' onSubmit={handleSubmit}>
                <h1>Completá tus datos para realizar la compra</h1>
                <div className='container-inputs'>
                    <div className='form-group'>
                        <input type="text" name='nombre' placeholder=' ' required value={dataForm.nombre} onChange={handleDataForm}/>
                        <label htmlFor="name">Nombre</label>
                    </div>
                    <div className='form-group'>
                        <input type="text" name='email' placeholder=' ' required value={dataForm.email} onChange={handleDataForm}/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className='form-group'>
                        <input type="text" name='celular' placeholder=' ' required value={dataForm.celular} onChange={handleDataForm}/>
                        <label htmlFor="cel">Celular</label>
                    </div>
                    <div className='form-group'>
                        <input type="text" name='direccion' placeholder=' ' required value={dataForm.direccion} onChange={handleDataForm}/>
                        <label htmlFor="direc">Dirección</label>
                    </div>
                </div>   
                <button type='submit'>Enviar</button>
            </form>
        </section>
    </main>
  )
}

export default CheckoutModal