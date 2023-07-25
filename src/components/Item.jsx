import React from "react";

const Item = ({ item }) => {
  return (
    <div className="producto">
      <img src={item.imgs[0]} alt={item.name} />
      
      <div className="producto-texts">
        <p className="price">${item.price}</p>
        <span>{item.name}</span>
        <button>Ver producto</button>
      </div>
    </div>
  );
};

export default Item;
