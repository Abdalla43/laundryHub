import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { NavDropdown, Nav, Container } from 'react-bootstrap';
import '../Styles/Header.css'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';



function Header() {
  
  const user = useSelector(selectUser)

  return (
    <div className="header">
      <Navbar className='header__container' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">laundryHub</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className='header__links' href="/">Home</Nav.Link>
              <NavDropdown className='header__links' title="features" id="collasible-nav-dropdown">
                <NavDropdown.Item className='header__links' href="/about">About Us</NavDropdown.Item>
                <NavDropdown.Item className='header__links' href="/service">Services</NavDropdown.Item>


              </NavDropdown>
              <Nav.Link className='header__links' href="/pricing">Pricing</Nav.Link>
              <Nav.Link className='header__links' href="/contact">Contact Us</Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown className='header__links' title="Account" id="collasible-nav-dropdown">
                <NavDropdown.Item className='header__links' href="/order">My Orders</NavDropdown.Item>

                {
                  !user ? <NavDropdown.Item className='header__links' href="/login">Login</NavDropdown.Item> : <NavDropdown.Item className='header__links' onClick={() => auth.signOut()}>logOut</NavDropdown.Item>
                }



              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
