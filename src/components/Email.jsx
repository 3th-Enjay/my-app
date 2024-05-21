import React, { useState } from 'react';

const Email = ({ type, placeholder, value, onChange  }) => {
    const [label, ] = useState("Enter your Email Address");

    return (
        <>
        <label htmlFor="email">Email:</label>
        <input 
            type= "email" 
            placeholder={placeholder} 
            value={value} 
            label={label}
            onChange = {onChange}
        />
        </>
    );
};

export default Email;
