import React from 'react'
import './Login.css'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Login() {
    return (
        <div className="login-container">
            <h4>Login</h4>
            <input className="login-input" type="text" placeholder="Email/username"/>
            <input className="login-input" type="password" placeholder="Password"/>
            <Button type="primary">Login</Button>
            <span className="or">Or</span>
            <span style={{marginTop:'30px'}}>Don't have an account?<Link to="/register">Create one here</Link></span>
        </div>
    )
}

export default Login
