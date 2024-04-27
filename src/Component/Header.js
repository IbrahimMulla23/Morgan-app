import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import brand from "../Assest/logo.png"
import { NavLink } from 'react-router-dom' 


function BasicExample() {
  return (
    <Navbar expand="lg" className="d-flex head-nav bg-white ">
      <Container className='navbarr'>
        <div>
          <img src={brand} className="main-logo" alt='main logo'/>
        </div>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fs-5">
          <NavLink className='Navbarr text-secondary' to="/">Home</NavLink>
            <NavLink className='Navbarr text-secondary' to="/About">About</NavLink>
            <NavLink className='Navbarr text-secondary' to="/Service">Service</NavLink>
            <NavLink className='Navbarr text-secondary' to="/blog">Blog</NavLink>
            <NavLink className='Navbarr text-secondary' to="/Contact">Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}


export default BasicExample;