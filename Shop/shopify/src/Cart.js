import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./All.css";
import DishNav from './DishNav';
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "./redux/features/cartSlice";
import Footer from './Footer';
import Footer2 from './Footer2';
import { Link } from 'react-router-dom';

const Cart = () => {
    const cartItems= useSelector((state)=>state.cart);
    console.log(cartItems);
  const dispatch  = useDispatch();
  const addToCart = (item)=>{
    dispatch(add(item));
  };
  const removeFromCart=(id)=>{
    dispatch(remove(id));
  };
  return (
    <div>
    <div className='Check'>
    <div className='Checkout'>
    <h2><Link to="/Dishes">Go Home</Link></h2>
    <h2><Link to="/CheckoutPage">Checkout</Link></h2>
    </div>
    </div>
    <div className='DishesBox'>
    {cartItems.map((item)=>(
 <div key={item.id} className='InnerDishesBox'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.imgsrc} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
      
        <Card.Text>
          {item.desc}
        </Card.Text>
        <h5> Category: {item.category}</h5>
        <p className='QuantityPara'>Quantity:{item.quantity}</p>
        <Button variant="primary" onClick={()=>addToCart(item)}>Add</Button>
        <Button variant="primary" onClick={()=>removeFromCart(item.id)}>Remove</Button>
      </Card.Body>
    </Card>
    </div>
    ))}
    
      
    </div>
    <Footer/>
    <Footer2/>
    </div>
  )
}

export default Cart;
