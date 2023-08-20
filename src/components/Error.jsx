import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <main className='error-main'>
            <h1>404</h1>
            <h4>Esta página no existe</h4>
            <Link to='/'><button>Ir a la página principal</button></Link>
        </main>
    )
}

export default Error