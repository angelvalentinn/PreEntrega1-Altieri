import { Link } from "react-router-dom";

const Item = ({ item }) => {

  return (
    <Link to={`/item/${item.id}`}>
      <div className="producto">
        <img src={item.imgs[0]} loading="lazy" alt={item.name} />

        <div className="producto-texts">
          <p className="price">{Number(item.price).toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</p>
          <span>{item.name}</span>
        </div>
      </div>
    </Link>
  );
};

export default Item;
