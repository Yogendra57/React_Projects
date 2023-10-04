
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllPages from './AllPages';
import NavItem1 from './NavItem1';
import Dishes from './Dishes';
import DishesData from './DishesData';
import Login from './Login';
import Cart from "./Cart";
import SecondPage from './SecondPage';
import InnerCard from './InnerCard';
import SignUp from './SignUp';
import CheckoutPage from './CheckoutPage';


function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<AllPages/>}/>
   <Route path='/dishes' element={<SecondPage/>}/>
   <Route path='/Cart' element={<Cart/>}/>
   <Route path='/Login' element={<Login/>}/>
   <Route path='/DishesData/:id' element={<InnerCard/>}/>
   <Route path='/SignUp' element={<SignUp/>}/>
   <Route path='/CheckoutPage' element={<CheckoutPage/>}/>
   
   
   </Routes>
   </BrowserRouter>

  );
}

export default App;
