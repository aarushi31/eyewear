import React, { useState } from 'react'
import './Login.css'
import {Button} from 'react-bootstrap'
import {Link,useHistory} from 'react-router-dom'
import image from '../../images/login.png'
import eye from '../../images/eye.png'

function Login() {
    const history=useHistory()
    const [type,setType]=useState('password');
    return (
        <div className="user-container">
            <div className="login-container"><h4>Login</h4>
            <input className="login-input" type="text" placeholder="Email/username"/>

            <input className="login-input" type="password" placeholder="Password" style={{height:'50px'}}/>
            
            <button className="login">Login</button>
            <span className="or">Or</span>
            <button onClick={()=>history.push('/register')} className="outlined">Create one here</button></div>
            <img src={image}alt=""/>
        </div>
    )
}

export default Login
