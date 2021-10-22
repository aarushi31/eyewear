import React, { useState } from 'react'
import LensOptions from './LensOptions';

function Prescription() {

    const [hide,setHide]=useState(false);

    const handleHide=()=>{
        
        if(hide===false){
            return(
                <div>
                    <p>You can submit your eye power after the payment step</p>
                    <button onClick={()=>setHide(true)}>Proceed</button>
                
                </div>
            )
        }
        else{
            return(
                <LensOptions/>
            )
        }
    }


    return (
        <div>
            {handleHide()}
        </div>
    )
}

export default Prescription
