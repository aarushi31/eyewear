import React from 'react'
import './Category.css'

function Category() {
    return (
        <div className="category-container">
            <div className="category">
                <img src="https://m.media-amazon.com/images/I/31vIip2AgkL.jpg" alt="men"/>
                <span>Men</span>
            </div>
            <div className="category">
                <img src="https://m.media-amazon.com/images/I/31vIip2AgkL.jpg" alt="men"/>
                <span>Women</span>
            </div>
            <div className="category">
                <img src="https://m.media-amazon.com/images/I/31vIip2AgkL.jpg" alt="men"/>
                <span>kids</span>
            </div>
        </div>
    )
}

export default Category
