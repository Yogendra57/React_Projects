import React from 'react'
import City from './City'
import "./All.css";
const Citybox = () => {
  return (
    <div className='box1'>
    <div className='box'>
    {City.map((item)=>(
      
<div className='Cityboxx'>
<div className='InnerCityBoxx'>
<h3>{item.name}</h3>
</div>
<div className='arrow'>
<b>></b>
</div>
</div>
  ))};
      
    </div>
    </div>
  )
}

export default Citybox
