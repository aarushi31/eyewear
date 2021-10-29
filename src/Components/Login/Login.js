import React, { useState } from 'react'
import './Login.css'
import {Button} from 'react-bootstrap'
import {Link,useHistory} from 'react-router-dom'
import image from '../../images/login.png'
import eye from '../../images/eye.png'

function Login() {
    const history=useHistory()
    const [type,setType]=useState('password');

    const handleEye=()=>{
        if(type==="password"){
            setType('text');
        }
        else{
            setType('password')
        }
    }
    return (
        <div className="user-container">
            <div className="login-container"><h4>Login</h4>
            <input className="login-input" type="text" placeholder="Email/username"/>

            <input className="login-input" type={type} placeholder="Password" style={{height:'50px'}}/>
            <i className="far fa-eye eye" style={{color:'#EE9776'}} onClick={handleEye}></i>
            <button className="login">Login</button>
            <span className="or">Or</span>
            <button onClick={()=>history.push('/register')} className="outlined">Create one here</button></div>
            <img src={image}alt=""/>
        </div>
    )
}

export default Login
