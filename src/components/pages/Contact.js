import React, { useState } from "react";
import validateEmail from '../../utils/helpers';

export default function Contact() {
  const contactForm = {
    backgroundColor: '#cccccc',
    margin: 0,
    padding: 20
  }
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue)
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div style={contactForm}>
      <h2>Contact</h2>
      <form className="form">
        <label>Name:
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"  
        />
        </label>
        <label>Email:
        <input
          className="form-control"
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        </label>
        <label>Message:
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          placeholder="Message"
        />
        </label>
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  )
}