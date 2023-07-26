import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

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

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !fullName || !messageContent) {
      setErrAlert("Input is invalid.");
      return;
    }

    // clear form if everything is successful
    setFullName("");
    setEmail("");
    setMessageContent("");
    setErrAlert("");

    alert(`Thank you for your message, ${fullName}!`);
  };

  return (
    <div>
      <h2>Contact Form</h2>
      <form>
        <p>Name:</p>
        <input
          type="text"
          value={fullName}
          name="fullName"
          //   anytime input changes, will trigger event handler
          onChange={handleInputChange}
          placeholder="Full Name"
        />
        <p>Email Address:</p>
        <input
          type="text"
          value={email}
          name="email"
          onChange={handleInputChange}
          placeholder="hi@email.com"
        />
        <p>Message:</p>
        <textarea
          rows="5"
          value={messageContent}
          name="messageContent"
          onChange={handleInputChange}
          placeholder="Please type in your message."
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errAlert && (
        <div>
            <p>{errAlert}</p>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
