import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import "./Checkout.css";

import { add, remove ,deleteProd} from "./redux/features/cartSlice";
import { IoMdTrace } from 'react-icons/io';

const CheckoutPage = () => {
    const cartItems = useSelector((state) => state.cart);
    const dispatch  = useDispatch();
    const addToCart = (item)=>{
        dispatch(add(item));
      };
      const removeFromCart=(id)=>{
        dispatch(remove(id));
      };
      const DeleteProducts=(id)=>{
        dispatch(deleteProd(id));
      }

    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity,0);
    const subTotal = cartItems.reduce((Stotal,item)=>Stotal + item.quantity*item.price,0);
    const MakePayment=()=>{
        console.log("hello");
    }
    
    
    return (
        <div>
            <div className='CheckoutPage'>
           
                <div className='AddressBox'>
                    <div className='LogoBox'>
                        <div className='Logo'>
                            <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'></img>
                        </div>
                    </div>

                    
                    <h1 className='LogoBoxheading1'>Checkout</h1>
                    <div className='Total'>
                    <h1>Order Summary</h1>
                    <div className='InnerTotal'>
                    
                    <div className='TotalBox'>
                    <h5>Sub Total:</h5>
                    <h5>Shiping Charges:</h5>
                    <h3>Total:</h3>
                    </div>
                    <div className='Value'>
                    <h5>{subTotal}</h5>
                    <h5>50</h5>
                    <h3>{subTotal+50}</h3>
                    </div>
                    
                    </div>
                    <h1>Personal Information</h1>
                    </div>
                   
                    <div className='Name'>
                        <input type='text' className='NameInput' placeholder='First Name'></input>
                        <input type='text' className='NameInput' placeholder='First Name'></input>
                    </div>
                    <div className='Emailboxx'>
                        <input type='text' className='Email' placeholder='Enter your Email Address'></input>
                    </div>
                    <div className='MobileBox'>
                        <input type='text' className='Email' placeholder='Mobile Number'></input>
                    </div>
                    <div className='TextArea'>
                        <input type='text' className='Address' placeholder='House No,Street, Area'></input>
                        <input type='text' className='Address' placeholder='Locality'></input>
                    </div>
                    <div className='LinkBox'>
                        <div className='Proced'>
                            <h5>
                                <button onClick={MakePayment()}>proced</button>
                            </h5>
                        </div></div>
                </div>
                <div className='Box'>
                    <div className='Heading'>
                        <h2>Cart Items</h2>
                    </div>
                    {cartItems.map((item) => (
                        <div className='CheckBox'>
                            <div className='CheckoutBox'>
                                <div className='CheckoutPageImg'>
                                    <img src={item.imgsrc}></img>
                                </div>
                                <div className='CheckoutPageDesc'>
                                    <div className='CheckoutPageDescBox1'>
                                        <h5>{item.title}</h5>
                                        <h5>{item.desc}</h5>
                                        <h6>Price:{item.price}</h6>
                                    </div>
                                    <div className='CheckoutPageDescBox2'>
                                    <div className='QuantityBox'>
                                    <h5>Quantity:</h5>
                                    </div>
                                    <div className='QuantityIcon'>
                                    <h3 className='QuantityI'  onClick={()=>addToCart(item)}>+</h3>
                                    <h5 className='QuantityMiddle'>{item.quantity}</h5>
        <h3 className='QuantityI'  onClick={()=>removeFromCart(item.id)}>-</h3>
                                    </div>
                                
                                    </div>
                                    <div className='CheckoutPageDescBox3'>
                                    <div className='InnerCheckoutPageDescBox3'>
                                    <h5>Total:{item.quantity * item.price}</h5>
                                    </div>
                                    </div>
                                    <div className='Delete'>
                                    <div className='DeleteProduct'>
                                    <h3 onClick={()=>DeleteProducts(item.id)}><i class="fa-solid fa-trash"></i></h3>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                        </div>
                        
                    ))}
                </div>

            </div>
        </div>
    )
}

export default CheckoutPage
