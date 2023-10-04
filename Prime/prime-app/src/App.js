import logo from './logo.svg';
import './App.css';
import MainPage from './MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import SignupPage from './SignupPage';
function App() {
  return (
    <BrowserRouter>
    
    <Routes>
    <Route path='/' element={<MainPage/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<SignupPage/>}/>
    </Routes>
    </BrowserRouter>
       
  );
}

export default App;
