import React from "react";
import "../Styles/ContactUs.css";
function ContactUs() {
  const send = () => {
    window.alert("الفورم مش شغال هخخخخ");
  };
  return (
    <div className="ContactUs">
      <p className="ContactTitle">Contact Us</p>
      <div>
        <input
          type="text"
          placeholder="First Name"
          className="NameInput TextInput"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="NameInput TextInput"
        />
      </div>
      <input
        type="email"
        placeholder="Email"
        className="TextInput EmailInput"
      />
      <br />
      <textarea
        name="Text1"
        cols="100"
        rows="10"
        placeholder="Your Message"
        className="TextInput MessageInput "
      ></textarea>
      <br />
      <button className="Btn SendBtn" onClick={send}>
        Send
      </button>
    </div>
  );
}

export default ContactUs;