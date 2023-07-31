import React from "react";

const ItemCount = ({cantidad,handleSumar,handleRestar,stock}) => {
  return (
    <div className="cantidad">
      <button
        onClick={handleSumar}
        className={cantidad == stock ? "button-disabled" : undefined}
      >
        +
      </button>
      <p>{cantidad}</p>
      <button
        onClick={handleRestar}
        className={cantidad == 1 ? "button-disabled" : undefined}
      >
        -
      </button>
    </div>
  );
};

export default ItemCount;
