import React, { useState } from "react";
import "./Contact.css";
// import contact from '../../assets/images/contact.jpg'
import ContactForm from "./ContactForm";

function Contact() {
  const [formIsOpen, setFormIsOpen] = useState(false);
  const formHandler = () => {
    setFormIsOpen((prevState) => !prevState);
  };

  let buttonText = !formIsOpen ? "Open Form" : "Close Form";
  return (
    <div className="Contact" id="contact">
      <p className="component-title">contact.</p>
      <div className="contact-container">
        <div className="contact-text">
          <p className="description">
            You can contact me using the below email address or completing the
            form.
            <br />
            E-mail:{" "}
            <a href="mailto:catalin.stan7@yahoo.com">catalin.stan7@yahoo.com</a>
          </p>
          <button className="btn" onClick={formHandler}>
            {buttonText}
          </button>
        </div>
      </div>
      <ContactForm isDisplayed={formIsOpen} />
    </div>
  );
}

export default Contact;
