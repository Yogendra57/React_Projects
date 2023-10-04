import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProductData from './ProductData';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import "./All.css";
import {add,remove} from "./redux/features/cartSlice";
const Products = () => {
  const dispatch=useDispatch();
  const addToCart=(item)=>{
      dispatch(add(item));
  }
  const removeFromCart=(itemId)=>{
        dispatch(remove(itemId));
  }
  return (
    <div className='crr'>
    <Link to='/Cart'> cart </Link>
    {ProductData.map((item) => (
      <div key={item.id} className='Cardbox'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.category}
          </Card.Text>
          <Button variant="primary " onClick={()=>addToCart(item)}>Add to Cart</Button>
          <Button onClick={()=>removeFromCart(item.id)}>remove from cart</Button>
        </Card.Body>
      </Card>
      </div>
      ))};
    </div>
  )
}

export default Products
