import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {  NavLink } from 'react-router-dom';
import './Header.css';
import useFirebase from '../../hooks/useFirebase';


const Header = () => {

  const{user,logout}=useFirebase();
    
    return (
        <div>
            <>
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="" className="fs-1 fst-italic header me-5 ">TRAVEL.com</Navbar.Brand>
    <Nav className="me-auto">
    <NavLink to="/home"  className='ms-5 text-dark fs-5 link'>Home</NavLink>
      <NavLink to="/myorder"  className='ms-5 text-dark fs-5 link'>My Orders</NavLink>
      <NavLink to="/manageallorder" className='ms-5 text-dark fs-5 link'>Manage All Order</NavLink>
      <NavLink to="/adddestination" className='ms-5 text-dark fs-5 link'>Add New Destination</NavLink>
     
     <span className='ms-2'>{user?.displayName}</span>
      {user?.email ? 
      <button onClick={logout}className='ms-5'>Log out</button>
       :
       <NavLink to="/login"  className='ms-5 text-dark fs-5 link'>Login</NavLink>
    }
      
    </Nav>
    </Container>
  </Navbar>
  
</>
        </div>
    );
};

export default Header;