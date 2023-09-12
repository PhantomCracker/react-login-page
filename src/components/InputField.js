import React, { useState } from 'react';
import './InputField.scss';

const Input = ({ type, value, placeholder, onChange, validation }) => {
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setError(validation(inputValue));
        onChange(inputValue);
    };

    return (
        <div>
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={handleInputChange}
                className="input-class"
            />
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default Input;
