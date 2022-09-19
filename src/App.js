import './App.css';
import Navbar from './components/Navbar/navbar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './components/Cart/cart';

function App() {

  
  return (
    <>
      {
        <BrowserRouter>
        
          <Navbar/>
        
        <Routes>
            <Route path = '/' element = {<ItemListContainer/>} />
            <Route path = '/category/:categoryId' element = {<ItemListContainer/>} />
            <Route path = '/item/:itemId' element = {<ItemDetailContainer/>} />
            <Route path = '/cart' element = {<Cart/>} />
        </Routes>
        
        </BrowserRouter>

      }

    
    </>
  );
}

export default App;
