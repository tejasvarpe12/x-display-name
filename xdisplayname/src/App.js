import './App.css';
import {useState} from "react";

function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  }

  const handleLastNameChange = (event) => {
    setLasttName(event.target.value);
  }

  const handleSubmit = () => {
    const fullNameValue = `${firstName} ${lastName}`;
    setFullName(fullNameValue); 
  }

  return (
    <div className="container">
      <div><h1>Full Name Display</h1></div>

      <div className='inputGroup'>
        <label htmlFor="firstName">First Name:</label>
        <input id="firstName" type="text" value={firstName} onChange={handleFirstNameChange}/>
      </div>

      <div className='inputGroup'>
        <label htmlFor="lastName">Last Name:</label>
        <input id="lastName" type="text" value={lastName} onChange={handleLastNameChange} />
      </div>

      <button onClick={handleSubmit}>
        Submit
      </button>

      <p>Full Name: {fullName}</p>
    </div>
  );
}

export default App;
