import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BiCart } from 'react-icons/bi';
import { MdSearch } from 'react-icons/md';
import { useSelector } from 'react-redux'; // Import useSelector
import "./NavItemCss.css";

function NavItem1() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Use useSelector to access the cart state
  const cartItems = useSelector((state) => state.cart);

  // Calculate the total quantity from the cart items
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Navbar
      expand="lg"
      className={`navbar-dark fixed-top px-4 nn clr ${
        isScrolled ? 'solid-bg' : 'transparent-bg'
      }`}
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navitem fs-4 text-center">
            <Nav.Link className="nav-link-custom" href="#crozal">
              Home
            </Nav.Link>
            <Nav.Link className="nav-link-custom" href="/about">
              About
            </Nav.Link>
            <Nav.Link className="nav-link-custom" href="#skills">
              Skills
            </Nav.Link>
            
            <Nav.Link className="nav-link-custom" href="#project">
            <Link to="/dishes"> Order Now!</Link>
            </Nav.Link>
            <Nav.Link className="nav-link-custom" href="#contact">
              Contact Us
            </Nav.Link>

            <Nav.Link className="nav-link-custom">
              <Link to="/cart">
                <BiCart className="cartt" />
                <span className="cart-quantity">{totalQuantity}</span> {/* Display totalQuantity */}
              </Link>
            </Nav.Link>

            <Nav.Link className="nav-link-custom" href="#contact">
              <MdSearch />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavItem1;