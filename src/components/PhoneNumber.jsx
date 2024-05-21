import React, { useState } from 'react';

const PhoneNumber = ({ type, placeholder, value, onChange}) => {
    const [label] = useState("Enter your User Name");

    return (
        <>
        <label htmlFor="Phonenumber">Phone Number:</label>
        <input 
            type={type} 
            placeholder={placeholder} 
            value={value} 
            onChange = {onChange}
            label={label}
        />
        </>
    );
};

export default PhoneNumber;
