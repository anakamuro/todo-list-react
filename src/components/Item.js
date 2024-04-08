import React from 'react'

function Item({item, deleteItem, editItem }) {
  return (
    <div>
    <div>ItemName: {item.item}</div>
    <button onClick={()=>deleteItem(item.id)}>DELETE ITEM</button>
    <button onClick={()=>editItem(item.id)}>Edit ITEM</button>
    </div>
  )
}

export default Item