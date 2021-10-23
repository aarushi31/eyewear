import React from 'react'
import { Button } from 'react-bootstrap'

function ChangePassword() {
    return (
        <div className="login-container">
            <h4>Change Password</h4>
            <div className="row-input">
                <label>Old password</label>
                <input className="login-input" placeholder="Old Password" type="password"/>
            </div>
            <div className="row-input">
                <label>New password</label>
                <input className="login-input" placeholder="New Password" type="password"/>
            </div>
            <div className="row-input">
                <label>Confirm password</label>
                <input className="login-input" placeholder="Confirm Password" type="password"/>
            </div>
            <Button type="primary">Update Password</Button>
        </div>
    )
}

export default ChangePassword
