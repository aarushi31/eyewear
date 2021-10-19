import React from 'react'
import './Eyewear.css'

function Eyewear() {
    return (
        <div className="main-container">
            <div className="categories">
                <span className="category-heading">Categories</span>
                <span className="category-item">Accessories</span>
                <span className="category-item">Eye Glasses</span>
                <span className="category-item">Gender</span>
                <span className="sub-category-items">Male</span>
                <span className="sub-category-items">Female</span>
                <span className="sub-category-items">Kids</span>
                <span className="category-item">Magic Lenses</span>
                <span className="category-item">Reading Glasses</span>
                <span className="sub-category-items">Bifocal</span>
                <span className="sub-category-items">Single vision</span>
                <span className="category-item">Sun Shades</span>
                <span className="category-item">Trending</span>
            </div>
            <div className="result">
                <span className="desc">Home / Accessories</span>
                <span className="category-heading">Accessories</span>
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
    )
}

export default Eyewear
