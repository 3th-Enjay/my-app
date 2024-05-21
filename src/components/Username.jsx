import React, { useState } from 'react';

const UserName = ({ type, placeholder, value, onChange }) => {
    const [label] = useState("Enter your User Name");

    return (
        <>
        <label htmlFor="UserName">Username</label>
        <input 
            type={type} 
            placeholder={placeholder} 
            value={value} 
            label={label}
            onChange = { onChange}
            
        />
        </>
    );
};

export default UserName;
