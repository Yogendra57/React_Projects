import React, { useState } from 'react';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to a server
  };

  return (
    <div className="sign-up-container">
      <form onSubmit={handleSubmit} className="sign-up-form">
        <h2>Sign Up</h2>
        <label className='SignUpLabel'>First Name</label>
        <input className='SignUpInput'
          type="text"
          name="firstName"
          placeholder=" Enter Your First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <label className='SignUpLabel'>Last Name</label>
        <input className='SignUpInput'
          type="text"
          name="lastName"
          placeholder="Enter Your Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <label className='SignUpLabel'>Email Address</label>
        <input className='SignUpInput'
          type="email"
          name="email"
          placeholder="Enter Your Email Address"
          value={formData.email}
          onChange={handleChange}
        />
        <label className='SignUpLabel'>Password:</label>
        <input className='SignUpInput'
          type="password"
          name="password"
          placeholder="Enter Your Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
