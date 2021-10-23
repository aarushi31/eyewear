import React from 'react'
import './Login.css'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'


function EditProfile() {
    return (
        <div className="login-container" style={{}}>
            <h4>Edit Profile</h4>
            
            <div className="login-row">
                <div className="row-input">
                    <label>Firstname</label>
                    <input className="login-input" placeholder="Firstname" type="text"/>
                </div>
                <div className="row-input">
                <label>Lastname</label>
                <input className="login-input" placeholder="Lastname" type="text"/>
                </div>
            </div>
            <div className="login-row">
                <div className="row-input">
                <label>Username</label>
                <input className="login-input" placeholder="Username" type="text"/>
                </div>
                <div className="row-input">
                <label>Email</label>
                <input className="login-input" placeholder="email" type="text"/>
                </div>
            </div>
            <div className="login-row">
                <div className="row-input">
                <label>Mobile no.</label>
                <input className="login-input" placeholder="Mobile no." type="text"/>
                </div>
                <div className="row-input">
                <label>Company</label>
                <input className="login-input" placeholder="Company" type="text"/>
                </div>
            </div>
            {/* <div className="login-row">
                <div className="row-input">
                <label>Password</label>
                <input className="login-input" placeholder="Password" type="password"/>
                </div>
                <div className="row-input">
                <label>Confirm Password</label>
                <input className="login-input" placeholder="Confirm Password" type="password"/>
                </div>
            </div> */}
            <span className="or">Address</span>
            <div className="login-row">
                <div className="row-input">
                <label>Address line 1</label>
                <input className="login-input" placeholder="Flat No./House No./Apartment Name" type="text"/>
                </div>
                <div className="row-input">
                <label>Address line 2</label>
                <input className="login-input" placeholder="Street/Area" type="text"/>
                </div>
            </div>
            <div className="login-row">
                <div className="row-input">
                <label>City</label>
                <input className="login-input" placeholder="City" type="text"/>
                </div>
                <div className="row-input">
                <label>State</label>
                <input className="login-input" placeholder="State" type="text"/>
                </div>
            </div>
            <div className="login-row">
                <div className="row-input">
                <label>Country</label>
                <input className="login-input" placeholder="Country" type="text"/>
                </div>
                <div className="row-input">
                <label>Pincode</label>
                <input className="login-input" placeholder="Pincode" type="text"/>
                </div>
            </div>
            <div className="login-row" style={{justifyContent:'center'}}>
                <Button type="primary" href="/change-password" style={{marginTop:'30px',width:'250px'}}>Change Password</Button>
                <Button type="primary" style={{marginLeft:'20px'}}>Save Changes</Button>
            </div>
            

        </div>
    )
}

export default EditProfile
