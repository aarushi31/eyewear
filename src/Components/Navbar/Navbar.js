import React from 'react'
import './Navbar.css'
import {Navbar,NavDropdown,Nav,Container,OverlayTrigger} from 'react-bootstrap'


function navbar() {

    const popover=()=>{
      return(
        <div className="popover">
          <div className="cart-product">
            <img src="https://d1wwyfhxuarwk4.cloudfront.net/images/products/common/white/xl/4436-32-w_fun-shades-sunglasses-navy-blue4e76410a050c142b3b7a399cc8b96340.jpg" alt="glasses"/>
            <span>White Oval Full Rim TR-90 Frame-Computer Spex (Zero Power)</span>
          </div>
          <p className="price">1 x  ₹799</p>
          <p className="subtotal">Subtotal : ₹799</p>
          <p className="links">View Cart</p>
          <p className="links">Checkout</p>
        </div>
      )
    }


    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
  <Navbar.Brand href="#home"><i class="fas fa-search"></i></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
       <NavDropdown title="Shop" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/eyewear">Eye Wear</NavDropdown.Item>
        <NavDropdown.Item href="/sun-shades">Sunshades</NavDropdown.Item>
        <NavDropdown.Item href="/bifocal">Reading Wear</NavDropdown.Item>
        <NavDropdown.Item href="/magic-lenses">Magic Lenses</NavDropdown.Item>
        <NavDropdown.Item href="/accessories">Accessories</NavDropdown.Item>
        {/* <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      </NavDropdown>
      <Nav.Link href="/contact">Contact</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link href="#deets"><i class="fab fa-instagram"></i></Nav.Link>
      <Nav.Link href="#memes">
      <i class="fab fa-facebook"></i>
      </Nav.Link>
      <>
  
    <OverlayTrigger
      
      key="bottom"
      placement="bottom"
      overlay={
        // <Tooltip id="tooltip-bottom">
        //   cart
        // </Tooltip>
        popover()
      }
    >
            <Nav.Link><i class="fas fa-shopping-bag" style={{fontSize:'30px'}}></i></Nav.Link>
    </OverlayTrigger>

</>

      <Nav.Link><i class="fas fa-user-circle" style={{fontSize:'30px'}}></i></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default navbar
