import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Input from './InputField';
import './InputForm.scss';
import Popup from "./Popup";

// Images
import cartImage from "../images/cart.svg";
import userIcon from "../images/user.svg";
import lockIcon from "../images/lock.svg";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const history = useHistory();

    const validateUsername = (value) => {
        if (!value) {
            return 'Username is required.';
        }
    };

    const validatePassword = (value) => {
        const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!passwordPattern.test(value)) {
            return 'Wrong combination';
        }
    };

    const handleLogin = () => {
        const testUsername = 'test@luxpmsoft.com';
        const testPassword = 'test1234!';

        if (username === testUsername && password === testPassword) {
            history.push('/dashboard');
        } else {
            setShowPopup(true);
        }
    };

    const handleClosePopup = () => {
        setShowPopup(false);
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
            {showPopup && (
                <Popup message="The provided password is wrong" onClose={handleClosePopup} />
            )}
        </div>
    );
};

export default Login;
