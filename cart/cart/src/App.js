
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Cart';
import 'bootstrap/dist/css/bootstrap.min.css';

import Products from './Products';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Products/>}/>
    <Route path='/Cart' element={<Cart/>}/>
    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
