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
                        <Col xs={6} className="col-content"><img src="https://d1wwyfhxuarwk4.cloudfront.net/images/products/common/white/xl/4436-32-w_fun-shades-sunglasses-navy-blue4e76410a050c142b3b7a399cc8b96340.jpg" alt="product" style={{width:'75px'}}/><div className="item"><span>White Oval Full Rim TR-90 Frame-Computer Spex (Zero Power)</span><span className="remove">Remove</span></div></Col>
                        <Col className="col-content" style={{marginTop:'23px'}}>₹799</Col>
                        <Col className="col-content" style={{marginTop:'23px'}}>1</Col>
                        <Col className="col-content" style={{marginTop:'23px'}}>₹799</Col>
                    </Row>
                    <Row style={{padding:'20px 0'}}>
                        <Col xs={6} className="apply-coupon"><textarea placeholder="Any special instructions..." style={{width:'80%',height:'100px',padding:'10px'}}/></Col>
                        <Col className="col-content" style={{borderLeft:'2px solid black'}}><div style={{display:'flex',flexDirection:'column',paddingLeft:'100px'}}>
                                <input className="apply-coupon" placeholder="Coupon Code"/>
                                <button className="apply-coupon">Apply</button>
                            </div></Col>
                    </Row>
                </Container> 
            </div>
            <div className="cart-total">
                <h3 className="cart-heading">Cart total</h3>
                <div className="cart-total-container">
                    <div className="receipt">
                        <Container>
                            <Row>
                                <Col>Item Total</Col>
                                <Col>₹ 1598</Col>
                            </Row>
                            <Row style={{marginTop:'30px'}}>
                                <Col>Delivery</Col>
                                <Col>₹ 0</Col>
                            </Row>
                            <Row style={{marginTop:'30px'}}>
                                <Col>Total</Col>
                                <Col>₹ 1598</Col>
                            </Row>
                        </Container>
                    </div>
                    <div className="cart-buttons">
                        <button className="checkout">Proceed to checkout</button>
                        <button className="apply-coupon">Continue shopping</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
