import React, { useEffect, useState } from "react";
import "./ContactForm.css";
import emailjsConfig from "../../configs/emailjs";
import emailjs from "emailjs-com";

function ContactForm(props) {
  const [formHeight, setFormHeight] = useState("0px");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameIsValid, setNameIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [messageIsValid, setMessageIsValid] = useState(false);
  const [formIsValid, setFormIsVaid] = useState(false);
  const [validationMessage, setValidationMessage] = useState(
    "*All the inputs are required."
  );

  useEffect(() => {
    if (props.isDisplayed) setFormHeight("fit-content");
    else setFormHeight("0px");
  }, [props.isDisplayed]);

  const nameHandler = (e) => {
    setName(e.target.value);
    if (e.target.value.length > 3) setNameIsValid(true);
    else setNameIsValid(false);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    if (e.target.value.includes("@")) setEmailIsValid(true);
    else setEmailIsValid(false);
  };

  const messageHandler = (e) => {
    setMessage(e.target.value);
    if (e.target.value.length > 3) setMessageIsValid(true);
    else setMessageIsValid(false);
  };

  useEffect(() => {
    if (nameIsValid && emailIsValid && messageIsValid) setFormIsVaid(true);
    else setFormIsVaid(false);
  }, [nameIsValid, emailIsValid, messageIsValid]);

  const formHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      setValidationMessage("Invalid inputs");
      return;
    }
    emailjs
      .sendForm(
        emailjsConfig.serviceID,
        emailjsConfig.templateID,
        event.currentTarget,
        emailjsConfig.userID
      )
      .then(
        (result) => {
          if (result.text === "OK") setValidationMessage(`Sent`);
          else setValidationMessage(`Not sent`);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <form
      id="contact-form"
      className="ContactForm"
      style={{ height: formHeight }}
      autoComplete="off"
      onSubmit={formHandler}
    >
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        onChange={nameHandler}
        value={name}
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="E-mail"
        onChange={emailHandler}
        value={email}
      />
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        placeholder="Message"
        onChange={messageHandler}
        value={message}
      ></textarea>
      <input type="submit" value="SEND MESSAGE" id="submit" />
      <p className="validation">{validationMessage}</p>
    </form>
  );
}

export default ContactForm;
