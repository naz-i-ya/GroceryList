import React from 'react';
import LineItems from './LineItems';


const ItemList = ( {items, handleChange, handleDelete} ) => {
  return (
    <div>
        <ul>
        {items.map( item => (
        <LineItems 
        item={item}
        items={items}
        handleDelete={handleDelete}
        handleChange={handleChange}/>
        ))}
       
    </ul>
    </div>
  )
}

export default ItemList