import './App.css';
import React, {useState} from "react";
// import Item from "./components/Item";
import {v4 as uuidv4 } from "uuid";

function App() {
  const [item, setItem ] = useState('');
  const [itemList, setItemList] = useState([]);
  const [editingItem, setEditingItem] = useState('')
  const [itemEditing, setItemEditing] = useState('')

  const handleChange = (e) => {
    setItem(e.target.value)
  }

  const addItem = (e) => {
    e.preventDefault()
    setItemList([...itemList, { id: uuidv4(), item: item}]);
    setItem('');
    console.log(itemList)
  }

  const deleteItem = (id) => {
    setItemList(itemList.filter((item) => item.id !== id))
  }
  const editItem = id => {
    const updatedItems = [...itemList].map((item) => {
      if(item.id === id){
        item.item = editingItem;
      }
      return item
    })
    setItemList(updatedItems)
    setEditingItem('')
  }
  // const editItem = (id, newTitle) => {
  //   const updatedItems = itemList.map((item) => {
  //     if(item.id === id){
  //       return {...item, title: newTitle}
  //     }
  //     return item;
  //   })
  //   setItemList(updatedItems);
  // }
  return (
    <div className="App">
      <input type="text" value={item} placeholder="Add the item" onChange={handleChange}/>
      {/* <input type="text" value={editingItem} placeholder="Add the item" onChange={(e) => setEditingItem(e.target.value)}/> */}
      <button onClick={addItem}>ADD ITEM</button>
      {itemList.map((item)=> {
         {itemEditing === item.id ? 
          (<input 
            value="text"
            onChange={(e) => setEditingItem(e.target.value)}
       
            >{item.editingItem}</input>)
            :
            (<div>{item.item}</div>)}
      
            <button onClick={()=>deleteItem(item.id)}>DELETE ITEM</button>
           {editingItem === item.id ? (<button onClick={()=>setItemEditing(item.id)}>Submit ITEM</button>) :
            (<button onClick={()=>editItem(item.id)}>Edit ITEM</button>
          )}
      })}
    </div>
  );
}

export default App;
