import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import Item from "./components/Item";
import {v4 as uuidv4 } from "uuid";

function App() {
  const [item, setItem ] = useState('');
  const [itemList, setItemList] = useState([]);
  // const [editingText, setEditingText] = useState('')

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
  // const editItem = id => {
  //   const updatedItems = [...itemList].map((item) => {
  //     if(item.id === id){
  //       item.text = editingText;
  //     }
  //     return item
  //   })
  //   setItemList(updatedItems)
  //   setEditingText('')
  // }
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
      <input className="add-input" type="text" value={item} placeholder="Add the item" onChange={handleChange}/>
      {/* <input type="text" value={editingText} placeholder="Add the item" onChange={(e) => setEditingText(e.target.value)}/> */}
      <button className="add-btn" onClick={addItem}>ADD ITEM</button>
      {itemList.map((item)=> {
        return (
        <Item key={item.id} item={item} deleteItem={deleteItem}
       />
        )
      })}
    </div>
  );
}

export default App;