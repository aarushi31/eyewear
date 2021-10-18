import React from 'react'
import './Navbar.css'
import {Navbar,NavDropdown,Nav,Container} from 'react-bootstrap'


function navbar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
  <Navbar.Brand href="#home"><i class="fas fa-search"></i></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
       <NavDropdown title="Shop" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Eye Wear</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Sunshades</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Reading Wear</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Magic Lenses</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Accessories</NavDropdown.Item>
        {/* <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      </NavDropdown>
      <Nav.Link href="/contact">Contact</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link href="#deets"><i class="fab fa-instagram"></i></Nav.Link>
      <Nav.Link href="#memes">
      <i class="fab fa-facebook"></i>
      </Nav.Link>
      <Nav.Link><i class="fas fa-shopping-bag" style={{fontSize:'30px'}}></i></Nav.Link>
      <Nav.Link><i class="fas fa-user-circle" style={{fontSize:'30px'}}></i></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default navbar
