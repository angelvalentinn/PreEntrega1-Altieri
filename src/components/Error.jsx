import { Link } from "react-router-dom";

const Error = ({ errorType }) => {
    return (
        <>
            {errorType == "404" ? (
                <main className="error-main">
                    <h1>404</h1>
                    <h4>Esta página no existe</h4>
                    <Link to="/">
                        <button>Ir a la página principal</button>
                    </Link>
                </main>
            ) : (
                <main className="error-main">
                    <h1 style={{fontSize:'3rem'}}>Item no encontrado</h1>
                    <Link to="/">
                        <button>Ir a la página principal</button>
                    </Link>
                </main>
            )}
        </>
    );
};

export default Error;
