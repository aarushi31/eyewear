import React from 'react'
import './Contact.css'
import {Form,Row,Col, Button} from 'react-bootstrap'

function Contact() {
    return (
        <div className="contact-us">
            <h3>Contact Us</h3>
            <div className="contact">
                <div className="detail">
                    <span style={{fontSize:'22px'}}>Head office</span>
                    <span>123 Demo Blvd, Miami, FL 4567, United States</span>
                </div>
                <div className="detail">
                    <span style={{fontSize:'22px'}}>Phone</span>
                    <span>+1 123-456-7890</span>
                </div>
                <div className="detail">
                    <span style={{fontSize:'22px'}}>Email</span>
                    <span>mail@example.com</span>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229929.1760314769!2d-80.36954411689972!3d25.78234042826896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C%20FL%2C%20USA!5e0!3m2!1sen!2sin!4v1634557149137!5m2!1sen!2sin" height="450" style={{border:'0',width:'100%',margin:'60px auto'}} allowfullscreen="" loading="lazy" title="address"></iframe>
            <div className="contact-form">
                <div className="left-container">
                    <h3 style={{width:'100%',textAlign:'left'}}>Stay in touch</h3>
                    <span>Faucibus parturient dignissim nisi, magna ullamcorper facilisi tincidunt nulla et morbi sed risus vestibulum consectetur arcu pulvinar.</span>
                    <span style={{marginTop:'40px',fontWeight:'500'}}>Customer Service</span>
                    <span>support@example.com</span>
                    <span>+1 123-456-7890</span>
                    <span>Mon- Sat:</span>
                    <span>10:00 AM - 20:00 PM</span>
                </div>
                <div className="right-container">
                    <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        Name
                        </Form.Label>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                
                        <Col sm="10">
                        <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        Email
                        </Form.Label>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        
                        <Col sm="10">
                        <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        Phone
                        </Form.Label>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        
                        <Col sm="10">
                        <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        What's on your mind?
                        </Form.Label>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        
                        <Col sm="10">
                        <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                    <Button variant="primary">Submit</Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Contact
