import logo from './logo.svg';
import './App.css';
import { BrowserRouter  } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import About from './About';



function App() {
  return (
    <div>
    <BrowserRouter>
    
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
