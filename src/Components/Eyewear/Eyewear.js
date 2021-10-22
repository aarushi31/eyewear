import React, { useState } from 'react'
import { Link,useHistory } from 'react-router-dom'
import './Eyewear.css'
import Options from './Options';
import Lens from './Lens'


function Eyewear() {
    const history=useHistory()
    const [show,setShow]=useState(false);
    const [show2,setShow2]=useState(false);


    const handleAddToCart=()=>{
        setShow(true);
        
    }

    const closeModal=(success,e)=>{
        // e.preventDefault()
        setShow(false);
        if(success) setShow2(true)
    }






    return (
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
                <span className="category-heading">Filters</span>
                
            </div>
            <div className="result">
                <span className="desc">Home / Eyewear</span>
                <span className="category-heading">Eyewear</span>
                <span className="desc">under this section we provide you with all the accessories required to help you taking care of your products</span>
                <span className="desc">Showing all 2 results</span>
                <div className="products">
                    <div className="product" style={{border:'none'}}>
                        <img src="https://s2seyewear.com/wp-content/uploads/2021/07/a1_19-300x133.jpg" alt="product" onClick={()=>history.push('/product')}/>
                        <span style={{cursor:'pointer'}} onClick={()=>history.push('/product')}>Blue Oval Full Rim TR-90 Frame-Computer Spex (Zero Power)</span>
                        <span style={{color:'rgb(34, 114, 160)'}}>₹799.00</span>
                        <span style={{textTransform:'uppercase',color:'black',cursor:'pointer'}} onClick={handleAddToCart}>Add to cart</span>
                    </div>
                    <div className="product" style={{border:'none'}}>
                        <img src="https://s2seyewear.com/wp-content/uploads/2021/09/1_6427-300x133.jpg" alt="product" onClick={()=>history.push('/product')}/>
                        <span style={{cursor:'pointer'}} onClick={()=>history.push('/product')}>Black Cateye Style Metal Acetate Frame – Computer Spex (Zero Power)</span>
                        <span style={{color:'rgb(34, 114, 160)'}}>₹1,799.00</span>
                        <span style={{textTransform:'uppercase',color:'black',cursor:'pointer'}} onClick={handleAddToCart}>Add to cart</span>
                    </div>
                </div>
            </div>
            <Options show={show} onHide={(e)=>closeModal(1,e)}/>
            <Lens show={show2} onHide={()=>setShow2(false)}/>
        </div>
    )
}

export default Eyewear
