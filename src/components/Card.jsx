import pay from "../assets/card-svgs/pay.svg";
import credit from "../assets/card-svgs/credit.svg";
import debit from "../assets/card-svgs/debit.svg";
import money from "../assets/card-svgs/money.svg";
import plus from "../assets/card-svgs/plus.svg";

const Card = () => {
    return (
        <section className="cards">
            <div className="card">
                <img srcSet={credit} />
                <div className='card-texts'>
                    <p>Tarjeta de crédito</p>
                    <button>Ver promociones bancarias</button>
                </div>
            </div>

            <div className="card card-desktop">
                <img srcSet={debit} />
                <div className='card-texts'>
                    <p>Tarjeta de débito</p>
                    <button>Ver más</button>
                </div>
            </div>

            <div className="card card-desktop">
                <img srcSet={money} />
                <div className='card-texts'>
                    <p>Cuotas sin tarjeta</p>
                    <button>Conocé Mercado Crédito</button>
                </div>
            </div>

            <div className="card card-desktop">
                <img srcSet={pay} />
                <div className='card-texts'>
                    <p>Efectivo</p>
                    <button>Ver más</button>
                </div>
            </div>

            <div className='card-plus card-desktop'>
                <img srcSet={plus} />
            </div>
            
        </section>
    )
}

export default Card