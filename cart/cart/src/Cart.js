import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "./redux/features/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);

  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(add(product));
  };

  const removeFromCart = (id) => {
    dispatch(remove(id));
  };

  return (
    <div>
      <div className="cr">
        {cartItems.map((item) => (
          <div key={`${item.id}`}>
            <Card style={{ width: "18rem" }} className="hei">
              <Card.Img variant="top" src={item.image} className="imgg" />
              <Card.Body className="bttt">
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.desc}</Card.Text>
                <div className="card-read">Read {item.quantity}</div>
                <Button onClick={() => addToCart(item)}>add</Button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button onClick={() => removeFromCart(item.id)}>
                  remove
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;