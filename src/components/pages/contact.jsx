import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import "../../styles/contact.css";

function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [messageContent, setMessageContent] = useState("");
  const [errAlert, setErrAlert] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "fullName") {
      setFullName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessageContent(inputValue);
    }
  };

  const handleInputFocus = () => {
    setErrAlert(""); // Clear the error message when the input is focused
  };

  const handleInputBlur = (e) => {    //make sure all areas are filled
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (!inputValue) {
      if (inputType === "fullName") {
        setErrAlert("Full Name is required.");
      } else if (inputType === "email") {
        setErrAlert("Email Address is required.");
      } else {
        setErrAlert("Message is required.");
      }
    } else {
      setErrAlert(""); // no error message if input has a value
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {      //check to see if email is accurate
      setErrAlert("Invalid email.")
      return
    };

    // clear form if everything is successful
    setFullName("");
    setEmail("");
    setMessageContent("");
    setErrAlert("");

    alert(`Thank you for your message, ${fullName}!`);
  };

  return (
    <div>
      <h2>Leave A Message</h2>
      <div className="form-container">
        <form>
          <p>Name:</p>
          <input
            className="input-area"
            type="text"
            value={fullName}
            name="fullName"
            //   anytime input changes, will trigger event handler
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
            placeholder="Full Name"
          />
          <p>Email Address:</p>
          <input
            className="input-area"
            type="text"
            value={email}
            name="email"
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
            placeholder="hello@email.com"
          />
          <p>Message:</p>
          <textarea
            className="input-area"
            rows="7"
            value={messageContent}
            name="messageContent"
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
            placeholder="Please type in your message."
          />

          {errAlert && (
            <div>
              <p className="error-msg">{errAlert}</p>
            </div>
          )}

          <div className="button-div">
            <button type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
