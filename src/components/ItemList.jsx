import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {
  return (
    <section className="productos">
        { productos.bebidas && productos.bebidas.map( item => <Item key={item.id} item={item} /> ) }
    </section>
  )

}

export default ItemList