import React, { useEffect, useState } from 'react';
import { Container, Nav , Navbar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  const [ navbar , setNavbar] =  useState(false);

  const scrollNavbar =  () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', scrollNavbar);





    return (
        <div className='text-white '>
            
        <Navbar id="navbar-example2" expand="lg" className={` fixed-top ${navbar ? 'bg-black' : 'bg-transparent'}`}>
      <Container>
        <Navbar.Brand href="#home" className='fw-bold text-white'>NIEEM HOSSEN</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " className='bg-white' />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ms-auto text-white">
            <Nav.Link href="#home" className={` fs-5 fw-normal  text-white`}> Home   </Nav.Link>
            <Nav.Link href="#about" className=' fs-5 fw-normal text-white'>About Us</Nav.Link>
            <Nav.Link href="#skills" className=' fs-5 fw-normal text-white'>Skills</Nav.Link>
            <Nav.Link href="#projects" className='fs-5 fw-normal text-white'>Projects</Nav.Link>
            <Nav.Link href="#contact" className=' fs-5 fw-normal text-white'>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default NavBar;