import React, { useState } from 'react'; // Import React and useState hook
import './App.css';
import Email from './components/Email';
import PhoneNumber from './components/PhoneNumber';
import UserName from './components/Username';

const App = () => {
  const [userName, setUserName] = useState(''); // Corrected variable name
  const [email, setEmail] = useState(''); // Corrected variable name
  const [phoneNumber, setPhone] = useState(''); // Corrected variable name

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userName && email && phoneNumber) { // Corrected variable names
      alert(`UserName: ${userName}, Email: ${email}, Phone: ${phoneNumber}`); // Corrected variable names
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <h1 className="h1">Sign Up</h1>
      <UserName value={userName} onChange={(e) => setUserName(e.target.value)} className="input-field"/>  
      <Email value={email} onChange={(e) => setEmail(e.target.value)} className="input-field"/>
      <PhoneNumber value={phoneNumber} onChange={(e) => setPhone(e.target.value)} className="input-field" />
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default App;
