import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import './Cart.css'

function Cart() {
    return (
        <div className="cart">
            <h3 className="cart-heading">My Cart(1)</h3>
            <div className="cart-table">
                <Container>
                    <Row style={{padding:'20px 0'}}>
                        <Col xs={6} className="col-heading">Product</Col>
                        <Col className="col-heading">Price</Col>
                        <Col className="col-heading">Quantity</Col>
                        <Col className="col-heading">Subtotal</Col>
                    </Row>
                    <Row style={{borderBottom:'2px solid black',padding:'20px 0'}}>
                        <Col xs={6} className="col-content"><img src="https://d1wwyfhxuarwk4.cloudfront.net/images/products/common/white/xl/4436-32-w_fun-shades-sunglasses-navy-blue4e76410a050c142b3b7a399cc8b96340.jpg" alt="product" style={{width:'75px'}}/>White Oval Full Rim TR-90 Frame-Computer Spex (Zero Power)</Col>
                        <Col className="col-content" style={{marginTop:'23px'}}>₹799</Col>
                        <Col className="col-content" style={{marginTop:'23px'}}>1</Col>
                        <Col className="col-content" style={{marginTop:'23px'}}>₹799</Col>
                    </Row>
                    <Row style={{padding:'20px 0'}}>
                        <Col><input placeholder="Coupon Code" type="text" style={{padding:'10px'}}/></Col>
                        <Col xs={6} className="apply-coupon">Apply coupon</Col>
                        <Col className="col-content">Update Cart</Col>
                    </Row>
                </Container>
            </div>
            <div className="cart-total">
                <Container style={{width:'50vw',marginLeft:'44%'}}>
                    <Row style={{border:'0.2px solid rgb(230, 230, 230)',padding:'20px 0',background:'#FBFBFB'}}>
                        <Col xs={12} className="cart-heading" style={{fontSize:'24px'}}>Cart Total</Col>
                    </Row>
                    <Row style={{border:'0.2px solid rgb(230, 230, 230)',padding:'20px 0'}}>
                        <Col className="col-heading">Subtotal</Col>
                        <Col className="col-heading">₹799</Col>
                    </Row>
                    <Row style={{border:'0.2px solid rgb(230, 230, 230)',padding:'20px 0',background:'#FBFBFB'}}>
                        <Col className="col-heading">Total</Col>
                        <Col className="col-heading">₹799</Col>
                    </Row>
                    <Row style={{border:'0.2px solid rgb(230, 230, 230)',padding:'20px 0'}}>
                        <Col className="apply-coupon" style={{textAlign:'center'}}>Proceed to checkout</Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Cart
