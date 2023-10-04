import React from 'react'
import NavItem1 from './NavItem1'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainImage from './MainImage';
import Location from './Location';
import Citybox from './Citybox';
import Country from './Country';
import Footer from './Footer';
import Footer2 from './Footer2';
import BottomLogo from './BottomLogo';

const AllPages = () => {
  return (
    <div>
   <NavItem1/> 
   <MainImage/>  
   <Location/>
   <Citybox/>
   <Country/>
   <BottomLogo/>
   <Footer/>
   <Footer2/>
    </div>
  )
}

export default AllPages
