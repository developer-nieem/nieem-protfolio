import React from 'react';
import { Container, Nav , Navbar} from 'react-bootstrap';

const NavBar = () => {
    return (
        <div className='text-white'>
            
        <Navbar expand="lg" className="bg-transparent ">
      <Container>
        <Navbar.Brand href="#home" className='fw-bold text-white'>NIEEM HOSSEN</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-white">
            <Nav.Link href="#home" className=' fs-5 fw-normal text-white'>Home</Nav.Link>
            <Nav.Link href="#link" className=' fs-5 fw-normal text-white'>About Us</Nav.Link>
            <Nav.Link href="#link" className='fs-5 fw-normal text-white'>Projects</Nav.Link>
            <Nav.Link href="#link" className=' fs-5 fw-normal text-white'>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default NavBar;