import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./All.css";
import { useDispatch } from "react-redux";
import { add, remove } from "./redux/features/cartSlice";
import { Link } from 'react-router-dom';

const Dishes = ({ dish=[] }) => {
  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch(add(item));
  };

  const removeFromCart = (itemId) => {
    dispatch(remove(itemId));
  };

  return (
    <div>
      <div className='DishesBox'>
        {dish.map((item) => (
          <div key={item.id} className='InnerDishesBox'>
            <Card style={{ width: '18rem' }}>
              <Link to={`/DishesData/${item.id}`}>
                <Card.Img variant="top" src={item.imgsrc} />
              </Link>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.desc}</Card.Text>
                <Card.Text>Category: {item.category}</Card.Text>
                <button className='DishesButton' onClick={() => addToCart(item)}>Add</button>
                <button className='DishesButton' onClick={() => removeFromCart(item.id)}>Remove</button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dishes;
