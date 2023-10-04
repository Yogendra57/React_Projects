// src/Login.js
import React, { useState } from "react";
import"./LoginPage.css";
import { Link } from "react-router-dom";
function Login() {
  const [data,setdata]=useState({
    Name:"",
    Email:"",
    Phone:"",
    Address:""
  })
const handleLogin=(e)=>{
   const {name,value} = e.target;
  setdata((prevData)=>({
    ...prevData,
    [name]:value,
  }))
}
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="login-container">
      <h2>Amazon Prime Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="Name"
            value={data.Name}
            onChange={handleLogin}
            required
          />
        </div>
        <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="Email"
          value={data.Email}
          onChange={handleLogin}
          required
        />
      </div>
      <div className="form-group">
      <label>Phone Number:</label>
      <input
        type="text"
        name="Phone"
        value={data.Phone}
        onChange={handleLogin}
        required
      />
    </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="Address"
            value={data.Address}
            onChange={handleLogin}
            required
          />
        </div>
        <button type="submit">Login</button>
        <Link to='/signup'>Signup</Link>
      </form>
    </div>
  );
}

export default Login;
