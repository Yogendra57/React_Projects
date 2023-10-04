import React, { useEffect, useState } from 'react';
import './All.css';
import { Link } from 'react-router-dom';
import DishesData from './DishesData';
import { useSelector } from 'react-redux';
import Dishes from './Dishes';

const DishNav = () => {
  const cartItems = useSelector((state) => state.cart);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter dishes based on the search query
  const filteredDishes = DishesData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className='DishNav'>
        <div className='DishNavBox'>
          <div className='DishBox1'>
            <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' alt="Logo" />
          </div>
          <div className='DishBox2'>
            <div className='InnerDishBox2'>
              <input
                placeholder='Search for restaurant, cuisine or a dish'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <hr />
          </div>
          <div className='DishBox3'>
            <Link to='/SignUp'>Sign Up</Link>
            <Link to='/Login'>Login</Link>
            <Link to='/cart'>Cart{totalQuantity}</Link>
          </div>
        </div>
      </div>
      <Dishes dish={searchQuery ? filteredDishes : DishesData} />
    </div>
  );
};

export default DishNav;
