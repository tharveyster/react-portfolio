import React, { useState } from "react";
import emailjs from 'emailjs-com';
import validateEmail from "../../utils/helpers";

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_USER_ID;

export default function Contact() {
  const [from_name, setName] = useState("");
  const [user_email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "from_name") {
      setName(inputValue);
    } else if (inputType === "user_email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const validation = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    if (inputType === "from_name") {
      if (!inputValue.length) {
        setErrorMessage("The name field is required");
      }
    } else if (inputType === "user_email") {
      if (!validateEmail(inputValue)) {
        setErrorMessage("Email is invalid");
      } else {
        setErrorMessage("");
      }
      if (!inputValue.length) {
        setErrorMessage("The email field is required");
      }
    } else {
      if (!inputValue.length) {
        setErrorMessage("The message field is required");
      }
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        setSuccessMessage('Your message was sent');
      }, (error) => {
        console.log(error.text);
        setErrorMessage('An error has occurred and your message was not sent');
      });
    e.target.reset()

    if (!validateEmail(user_email)) {
      setErrorMessage("Email is invalid");
      return;
    }
    setName("");
    setEmail("");
    setMessage("");
    setErrorMessage("");
  };

  return (
    <div className="contactForm">
      <h2>Contact</h2>
      <form className="form" onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input
            className="form-field"
            type="text"
            name="from_name"
            value={from_name}
            onBlur={validation}
            onChange={handleInputChange}
            placeholder="Name"
            required
          />
        </label>
        <label>
          Email:
          <input
            className="form-field"
            type="email"
            name="user_email"
            value={user_email}
            onBlur={validation}
            onChange={handleInputChange}
            placeholder="Email"
            required
          />
        </label>
        <label>
          Message:
          <textarea
            className="form-field"
            type="text"
            name="message"
            value={message}
            onBlur={validation}
            onChange={handleInputChange}
            placeholder="Message"
            required
          />
        </label>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        {successMessage && (
          <div>
            <p className='success-text'>{successMessage}</p>
          </div>
        )}
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
