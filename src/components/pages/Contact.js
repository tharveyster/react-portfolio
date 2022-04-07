import React, { useState } from "react";
import validateEmail from "../../utils/helpers";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const validation = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    if (inputType === "name") {
      if (!inputValue.length) {
        setErrorMessage("The name field is required");
      }
    } else if (inputType === "email") {
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

    if (!validateEmail(email)) {
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
      <p>
        This form is not active yet. In the meantime you can reach me at
        todd@theharveysplace.com.
      </p>
      <form className="form">
        <label>
          Name:
          <input
            className="form-field"
            value={name}
            name="name"
            onBlur={validation}
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
          />
        </label>
        <label>
          Email:
          <input
            className="form-field"
            value={email}
            name="email"
            onBlur={validation}
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
          />
        </label>
        <label>
          Message:
          <textarea
            className="form-field"
            value={message}
            name="message"
            onBlur={validation}
            onChange={handleInputChange}
            placeholder="Message"
          />
        </label>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button className="btn" type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
