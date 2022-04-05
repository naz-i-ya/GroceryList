import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";
import React,{ useState, useEffect } from 'react';
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("shoppingList")) || [] );
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('shoppingList', JSON.stringify(items));
  }, [items]);

{ /*const setAndSaveItem = (newItems) => {
 setItems(newItems);
 localStorage.setItem('shoppingList', JSON.stringify(newItems));
}*/}

const addItem = (item) => {
  const id = items.length ? items[items.length - 1].id + 1 : 1;
  const myNewItem = {id, checked:false, item};
  const listItems = [...items, myNewItem];
  // setAndSaveItem(listItems);
  setItems(listItems)
}

const handleChange = ( id ) => {
   const listItems = items.map((item) => item.id === id ? {...item, checked:!item.checked} : item)
  //  setAndSaveItem(listItems);
  setItems(listItems);
}

const handleDelete = ( id ) => {
    const listItems = items.filter((item) => item.id !== id);
    // setAndSaveItem(listItems);
    setItems(listItems);

}

const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return;
    //addItem
    addItem(newItem);
    setNewItem('');
}
  return (
    <div className="App">
     <Header  />

     <AddItem
     newItem={newItem}
     setNewItem={setNewItem}
     handleSubmit={handleSubmit} />

     <SearchItem 
     search={search}
     setSearch={setSearch}/>

     <Content 
     items={items.filter((item) => (item.item).toLowerCase().includes((search.toLowerCase())))}
     handleChange={handleChange}
     handleDelete={handleDelete} />
     <Footer  length={items.length} />
    </div>
  );
}

export default App;
