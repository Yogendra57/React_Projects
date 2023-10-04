import React from 'react';
import { useParams } from 'react-router-dom';
import DishesData from './DishesData';
import { useDispatch } from 'react-redux'; // Import useDispatch here
import { add, remove } from './redux/features/cartSlice';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import DishNav from './DishNav';
import Footer from './Footer';
import Footer2 from './Footer2';
import BottomLogo from './BottomLogo';

const InnerCard = () => {
  const { id } = useParams(); // Get the 'id' parameter from the URL
  const item = DishesData.find((item) => item.id === id); // Find the product by 'id'

  const dispatch = useDispatch(); // Move the useDispatch call outside of the conditional

  if (!item) {
    return <div>Product not found</div>;
  }

  const addToCart = () => {
    dispatch(add(item));
  };

  const removeFromCart = () => {
    dispatch(remove(item.id));
  };

  return (
    <div>
    <Button className='InnerCardButton'><Link to="/Cart">Cart</Link></Button>
    
    <Button className='InnerCardButton'><Link to="/Dishes">Go Home</Link></Button>
    <div className='InnerCardBox'>
      <div className="InnerCard">
        <div className="InnerCardImg">
          <img src={item.imgsrc} alt={item.title} />
        </div>
        <div className="InnerCardDesc">
          <h3 className="InnerCardHead">{item.title}</h3>
          <p>{item.desc}</p>
          <h5>Category: {item.category}</h5>
          
          <Button  className='InnerCardButton' variant="primary" onClick={addToCart}>Add</Button>
          <Button className='InnerCardButton' variant="primary" onClick={removeFromCart}>Remove</Button>
        </div>
      </div>
    </div>
    <BottomLogo/>
    <Footer/>
    <Footer2/>
    </div>
  );
};

export default InnerCard;
