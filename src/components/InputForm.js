import React, { useState } from 'react';
import Input from './InputField';
import './InputField.scss';

// Images
import cartImage from "../images/cart.svg";
import userIcon from "../images/user.svg";
import lockIcon from "../images/lock.svg";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const validateUsername = (value) => {
        if (!value) {
            // return 'Username is required.';
        }
        // Add additional validation logic if needed
        // return null;
    };

    const validatePassword = (value) => {
        if (!value) {
            // return 'Password is required.';
        }
        // Add additional validation logic if needed
        // return null;/
    };

    const handleLogin = () => {
        // Perform login logic using the username and password
        if (username && password) {
            // Handle successful login
            console.log('Logged in with username:', username);
        } else {
            // Handle login error
            console.error('Login failed. Please check your credentials.');
        }
    };

    return (
        <div className="input-form">
            <img className="cart-image" src={cartImage} alt="cart" />

            <div className="input-container">
                <img className="icon" src={userIcon} alt="userIcon" />
                <Input
                    label="Username"
                    type="text"
                    value={username}
                    placeholder="USERNAME"
                    onChange={setUsername}
                    validation={validateUsername}
                />
            </div>

            <div className="input-container">
                <img className="icon" src={lockIcon} alt="userIcon" />
                <Input
                    label="Password"
                    type="password"
                    value={password}
                    placeholder="PASSWORD"
                    onChange={setPassword}
                    validation={validatePassword}
                />
            </div>
            <button className="login-button" onClick={handleLogin}>LOGIN</button>
            <p className="forgot-password">Forgot password?</p>
        </div>
    );
};

export default Login;
