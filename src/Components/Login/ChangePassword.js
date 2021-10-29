import React from 'react'
import { Button } from 'react-bootstrap'
import image from '../../images/cp.png'

function ChangePassword() {
    return (
        <div className="user-container">
        <div className="login-container">
            <h4>Change Password</h4>
            <div className="row-input">
                
                <input className="login-input" placeholder="Old Password" type="password"/>
            </div>
            <div className="row-input">
                
                <input className="login-input" placeholder="New Password" type="password"/>
            </div>
            <div className="row-input">
                
                <input className="login-input" placeholder="Confirm Password" type="password"/>
            </div>
            <button className="login">Update Password</button>
        </div>
        <img src={image} alt=""/>
        </div>
    )
}

export default ChangePassword
