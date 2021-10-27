import React from 'react'
import './Category.css' 
import category from '../../images/category.png'

function Category() {
    return (
        <>
        <h2 className="green-heading">Categories</h2>
        <div className="category-container">
            <div className="category">
                <img src={category} alt="men"/>
                <span>Men</span>
            </div>
            <div className="category">
                <img src={category} alt="men"/>
                <span>Women</span>
            </div>
            <div className="category">
                <img src={category} alt="men"/>
                <span>kids</span>
            </div>
        </div>
        </>
    )
}

export default Category
