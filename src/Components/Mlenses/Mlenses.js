import React, { useState } from 'react'
import '../Eyewear/Eyewear.css'
import {Link,useHistory} from 'react-router-dom'
import {InputGroup,Form,Button,Modal} from 'react-bootstrap'

function Mlenses() {
    const history=useHistory()
    const [show,setShow]=useState(true);
    const [show2,setShow2]=useState(false);
    const [option,setOption]=useState("1");
    
    

    const handleSubmit=(success,e)=>{
        //e.preventDefault();
        setShow(false)

        if(option==2){
         
           if(success) setShow2(true)
        }
        if(option==3){
            history.push('/accessories');
        }   
    }

    const modalData=()=>{
        if(show===true){
            return(
                <div className="option-container">
                    <h4>Select power type</h4>
                    <Form>
                        <InputGroup className="input">
                            <Form.Check name="option" value="1" label="Fashion (zero power contact lenses)" inline type="radio" onClick={(e)=>setOption(e.target.value)}/>
                            {/* <Form.Label style={{marginLeft:'30px'}}>Zero power(basic lenses just for protection and fashion)</Form.Label> */}
                        </InputGroup>
                        <InputGroup className="input">
                            <Form.Check name="option" value="2" label="Powered contact lenses" inline type="radio" onClick={(e)=>setOption(e.target.value)}/>
                        </InputGroup>
                        <InputGroup className="input">
                            <Form.Check label="Contact lens solution" value="3" name="option" inline type="radio" onClick={(e)=>setOption(e.target.value)}/>
                            
                        </InputGroup>
                        <Button type="primary" style={{marginTop:'30px'}} onClick={(e)=>handleSubmit(1,e)}>Submit</Button>
                    </Form>
                </div>
            )
        }

        else if(show2===true){
            return(
                <div className="option-container">
                    <h4>Select power type</h4>
                    <Form>
                        <InputGroup className="input">
                            <Form.Check name="option" value="1" label="–SPH power(only sph)" inline type="radio"/>
                            {/* <Form.Label style={{marginLeft:'30px'}}>Zero power(basic lenses just for protection and fashion)</Form.Label> */}
                        </InputGroup>
                        <InputGroup className="input">
                            <Form.Check name="option" value="2" label="+SPH power(only sph)" inline type="radio"/>
                        </InputGroup>
                        <InputGroup className="input">
                            <Form.Check label="Cyl power (cyl>0.75)(only cyl)" value="3" name="option" inline type="radio"/>
                            
                        </InputGroup>
                        <InputGroup className="input">
                            <Form.Check label="Toric power(sph+cyl)" value="4" name="option" inline type="radio"/>
                            
                        </InputGroup>
                        <Button type="primary" style={{marginTop:'30px'}} onClick={()=>setShow2(false)}>Submit</Button>
                    </Form>
                </div>
            )
        }

    }


    return (
        <>
        <div className="main-container">
            <div className="categories">
                <span className="category-heading">Categories</span>
                <span className="category-item"><Link to="/accessories" className="link">Accessories</Link></span>
                <span className="category-item"><Link to="/eyewear" className="link">Eye Glasses</Link></span>
                <span className="category-item">Gender</span>
                <span className="sub-category-items"><Link to="/male" className="link">Male</Link></span>
                <span className="sub-category-items"><Link to="/female" className="link">Female</Link></span>
                <span className="sub-category-items"><Link to="/kids" className="link">Kids</Link></span>
                <span className="category-item"><Link to="/magic-lenses" className="link">Magic Lenses</Link></span>
                <span className="category-item">Reading Glasses</span>
                <span className="sub-category-items"><Link to="/bifocal" className="link">Bifocal</Link></span>
                <span className="sub-category-items"><Link to="/single-vision" className="link">Single vision</Link></span>
                <span className="category-item"><Link to="/sun-shades" className="link">Sun Shades</Link></span>
                <span className="category-item"><Link to="/trending" className="link">Trending</Link></span>
            </div>
            <div className="result">
                <span className="desc">Home / Magic Lenses</span>
                <span className="category-heading">Magic Lenses</span>
                <span className="desc">under this section we provide you with all the accessories required to help you taking care of your products</span>
                <span className="desc">Showing all 2 results</span>
                <div className="products">
                    <div className="product" style={{border:'none'}}>
                        <img src="https://s2seyewear.com/wp-content/uploads/2021/09/bio_true_1_1-300x133.jpg" alt="product"/>
                        <span>Bio true 60 ml</span>
                        <span style={{color:'rgb(34, 114, 160)'}}>₹799.00</span>
                    </div>
                    <div className="product" style={{border:'none'}}>
                        <img src="https://s2seyewear.com/wp-content/uploads/2021/09/bio_true_1_1-300x133.jpg" alt="product"/>
                        <span>Bio true 60 ml</span>
                        <span style={{color:'rgb(34, 114, 160)'}}>₹799.00</span>
                    </div>
                </div>
            </div>
        </div>

        <Modal show={show} onHide={()=>handleSubmit(1)}>
            <Modal.Header closeButton>
            {/* <Modal.Title>Select category</Modal.Title> */}
            </Modal.Header>
            <Modal.Body>{modalData()}</Modal.Body>
            
        </Modal>

        <Modal show={show2} onHide={()=>setShow2(false)}>
            <Modal.Header closeButton>
            <Modal.Title>Power</Modal.Title>
            </Modal.Header>
            <Modal.Body>{modalData()}</Modal.Body>
            
        </Modal>

        </>
    )
}

export default Mlenses
