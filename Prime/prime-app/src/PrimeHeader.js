import React from 'react'
import "./All.css";
import { Link } from 'react-router-dom';
const PrimeHeader = () => {
  return (
    <div>
    
            <div className='Header'>
            <div className='logo'>
            <a>
            <img src='https://m.media-amazon.com/images/G/01/digital/video/web/Logo-min.png'></img>
            </a>
            </div>
            <div className='middle'>
            <ul>
            <li>Home
            <ul>
            <li>All</li>
            <li>Movies</li>
            <li>Tv Shows</li>
            </ul>
            </li>
            <li>Store</li>
            <li>Live</li>
            <li>Categories</li>
            </ul>
            </div>
            <div className='buttons'>
            
            <Link to='/login'>Sign In</Link>
            
            </div>
            </div>
        
    </div>
  )
}

export default PrimeHeader
