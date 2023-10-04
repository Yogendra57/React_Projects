import React from 'react'
import "./All.css";
import City from './City';
const Country = () => {
  return (
    <div className='CountryBox1'>
    <h1>All Countries</h1>
    <div className='CountryBox'>
    {City.map((item)=>(
      
        <div className='Country'>
        <div className='InnerCountryBox'>
        <h3>{item.name}</h3>
        </div>
        
        </div>
          ))};
    </div>
    </div>
  )
}

export default Country
