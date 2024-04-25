import React, { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    setFirstNameError('');
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
    setLastNameError('');
  };

  const handleSubmit = () => {
    if (!firstName.trim()) {
      setFirstNameError('Please enter your first name');
    }

    if (!lastName.trim()) {
      setLastNameError('Please enter your last name');
    }

    if (firstName.trim() && lastName.trim()) {
      const fullNameValue = `${firstName} ${lastName}`;
      setFullName(fullNameValue);
    }
  };

  return (
    <div className="container">
      <div>
        <h1>Full Name Display</h1>
      </div>

      <div className={`inputGroup ${firstNameError && 'errorInput'}`}>
        <label htmlFor="firstName">First Name:</label>
        <input id="firstName" type="text" value={firstName} onChange={handleFirstNameChange} />
        {firstNameError && <p className="error">{firstNameError}</p>}
      </div>

      <div className={`inputGroup ${lastNameError && 'errorInput'}`}>
        <label htmlFor="lastName">Last Name:</label>
        <input id="lastName" type="text" value={lastName} onChange={handleLastNameChange} />
        {lastNameError && <p className="error">{lastNameError}</p>}
      </div>

      <button onClick={handleSubmit} type="submit">
        Submit
      </button>

      <p>Full Name: {fullName}</p>
    </div>
  );
}

export default App;
