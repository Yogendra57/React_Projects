import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login';

const Navbar1 = () => {
  return (
    <div>
    <header className="header">
    <div className="container">
        <div className="row">
            <div className="col-lg-2">
                <div className="header__logo">
                    <a href="./index.html">
                        <img src="img/logo.png" alt=""/>
                    </a>
                </div>
            </div>
            <div className="col-lg-8">
                <div className="header__nav">
                    <nav className="header__menu mobile-menu">
                        <ul>
                            <li className="active"><Link to="/">Homepage</Link></li>
                            <li><a href="./categories.html">Categories <span className="arrow_carrot-down"></span></a>
                                <ul className="dropdown">
                                    <li><a href="./categories.html">Categories</a></li>
                                    <li><a href="./anime-details.html">Anime Details</a></li>
                                    <li><a href="./anime-watching.html">Anime Watching</a></li>
                                    <li><Link to="/Blog">Blog Details</Link></li>
                                    <li><Link to="/Login">Sign Up</Link></li>
                                    <li><Link to="/Login">Login</Link></li>
                                </ul>
                            </li>
                            <li><Link to="Blog"><a>Our Blog</a></Link></li>
                            <li><a href="#">Contacts</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="col-lg-2">
                <div className="header__right">
                    <a href="#" className="search-switch"><span className="icon_search"></span></a>
                    <Link to="/Login"><a ><span className="icon_profile"></span></a></Link>
                </div>
            </div>
        </div>
        <div id="mobile-menu-wrap"></div>
    </div>
</header>

    </div>
  )
}

export default Navbar1
