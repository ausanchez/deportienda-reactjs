import './App.css';
import Navbar from './components/Navbar/navbar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemCount from './components/ItemCount/itemCount';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  const onAdd = (count) => {
    console.log(`Has agregado ${count} productos`)
  }

  return (
    <>
      {
        <BrowserRouter>
        
          <Navbar/>
        
        <Routes>
            <Route path = '/' element = {<ItemListContainer/>} />
            <Route path = '/category/:categoryId' element = {<ItemListContainer/>} />
            <Route path = '/item/:itemId' element = {<ItemDetailContainer/>} />
        </Routes>
        
        </BrowserRouter>
      /*
      
      <ItemCount stock ={15} initial ={1} onAdd ={onAdd}/>
      */
      }

    
    </>
  );
}

export default App;
