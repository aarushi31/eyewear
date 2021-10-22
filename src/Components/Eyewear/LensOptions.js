import React from 'react'
import './Options.css'
import {Button} from 'react-bootstrap'
import { useHistory } from 'react-router'

function LensOptions() {
    const history=useHistory()

    const handleProceed=()=>{
        history.push('/cart')
    }

    return (
        <>
        <div className="lens-cards">
            <div className="lens-card">
                <div className="blue-part">
                    <span>Frame + Lens ₹3600</span>
                    <span>1 year warranty</span>
                    <button>Add to Cart</button>
                </div>
                <span className="green-text">Buy 1 and get 1 free</span>
                <span className="grey-text">Blue block and anti-glare</span>
                <span className="grey-text">Blue block and anti-glare</span>
                <span className="grey-text">Blue block and anti-glare</span>
                <span className="grey-text">Blue block and anti-glare</span>
                <span className="grey-text">Blue block and anti-glare</span>
            </div>
            <div className="lens-card">
                <div className="blue-part">
                    <span>Frame + Lens ₹3600</span>
                    <span>1 year warranty</span>
                    <button>Add to Cart</button>
                </div>
                <span className="green-text">Buy 1 and get 1 free</span>
                <span className="grey-text">Blue block and anti-glare</span>
                <span className="grey-text">Blue block and anti-glare</span>
                <span className="grey-text">Blue block and anti-glare</span>
                <span className="grey-text">Blue block and anti-glare</span>
                <span className="grey-text">Blue block and anti-glare</span>
            </div>
            <div className="lens-card">
                <div className="blue-part">
                    <span>Frame + Lens ₹3600</span>
                    <span>1 year warranty</span>
                    <button>Add to Cart</button>
                </div>
                <span className="green-text">Buy 1 and get 1 free</span>
                <span className="grey-text">Blue block and anti-glare</span>
                <span className="grey-text">Blue block and anti-glare</span>
                <span className="grey-text">Blue block and anti-glare</span>
                <span className="grey-text">Blue block and anti-glare</span>
                <span className="grey-text">Blue block and anti-glare</span>
            </div>
            <div className="lens-card">
                <div className="blue-part">
                    <span>Frame + Lens ₹3600</span>
                    <span>1 year warranty</span>
                    <button>Add to Cart</button>
                </div>
                <span className="green-text">Buy 1 and get 1 free</span>
                <span className="grey-text">Blue block and anti-glare</span>
                <span className="grey-text">Blue block and anti-glare</span>
                <span className="grey-text">Blue block and anti-glare</span>
                <span className="grey-text">Blue block and anti-glare</span>
                <span className="grey-text">Blue block and anti-glare</span>
            </div>

            
        </div>
        <Button type="primary" style={{marginTop:'20px'}} onClick={handleProceed}>Submit</Button>
        </>
    )
}

export default LensOptions
