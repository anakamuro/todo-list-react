import React from 'react'

function Item({item, deleteItem }) {
  return (
    <div className="show-item">
    <div>ItemName: {item.item}</div>
    <button className="del-btn" onClick={()=>deleteItem(item.id)}>DELETE ITEM</button>
    {/* <button onClick={()=>editItem(item.id)}>Edit ITEM</button> */}
    </div>
  )
}

export default Item