import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
      <div className="producto">
        <img src={item.imgs[0]} alt={item.name} />

        <div className="producto-texts">
          <p className="price">${item.price}</p>
          <span>{item.name}</span>
          <Link to='/item'><button>Ver producto</button></Link>
        </div>
      </div>
  );
};

export default Item;
