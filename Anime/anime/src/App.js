import logo from './logo.svg';
import './App.css';

import Blog from './Blog';
import Front from './Front';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Front/>}/>
    <Route path='/Blog' element={<Blog/>}/>
    <Route path='/Login' element={<Login/>}/> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;
