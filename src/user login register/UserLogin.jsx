import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./userlogin.css"; // manual css import
import api from "../axios";
const UserLogin = () => {

    const [UserName,setUserName] = useState()
    const [UserPassword,setUserPassword] = useState()
    const [LoginError , setLoginError] = useState('')

    const navigate = useNavigate();
    const userLoginFunc = async (e) => {
        e.preventDefault()

        try {
            //  "user": "john.walt",
            //     "pass": "abcjohn"
            const userCredential = {
                "user": UserName,
                "pass": UserPassword
            }
            const response = await api.post("login", userCredential)
            response.data.success ? localStorage.setItem('vendorRef', response.data.user.vendorref) : console.log('user not get login')
            navigate('/')

            console.log(response, 'user  detail')
        }
        catch (err) {
            console.log('something wrong with your credentials')
            setLoginError('Incorrect Username or Password')
        }
    }
    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <div className="icon">🔐</div>
                    <h2>Sign in with email</h2>
                    <p>Make a new doc to bring your words, data, and teams together. For free</p>
                </div>

                <form className="login-form">
                    <div className="input-group">
                        <span className="icon">📧</span>
                        <input type="email" placeholder="Email" onChange={(e)=> setUserName(e.target.value)}/>
                    </div>

                    <div className="input-group">
                        <span className="icon">🔒</span>
                        <input type="password" placeholder="Password" onChange={(e)=> setUserPassword(e.target.value)} />
                    </div>

                    <div className="forgot">Forgot password?</div>

                    <button onClick={userLoginFunc} type="submit" className="btn">Get Started</button>

                    <span style={{color:"red"}}>{LoginError}</span>
                </form>

                <div className="divider">
                    <span>Or sign in with</span>
                </div>

                <div className="socials">
                    <button className="social-btn">G</button>
                    <button className="social-btn">f</button>
                    <button className="social-btn"></button>
                </div>
            </div>
        </div>
    );
};

export default UserLogin;
