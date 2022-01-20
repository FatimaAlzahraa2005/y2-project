import React, { useState } from "react";
import "../Styles/login.css";
import reactRouterDom, { Link, Navigate } from "react-router-dom";
function LogIn({ loggedIn, SetloggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const login = () => {
    SetloggedIn(true);
    localStorage.setItem("LoggedIn", "true");
  };

  if (localStorage.getItem("LoggedIn") === "true") {
    return <Navigate to="/home" />;
  }

  return (
    <div className="LogIn">
      <div className="container">
        <h2>Log In</h2>
        <div className="sub-container">
          <label>Email address</label>
          <br />
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div className="sub-container">
          <label>Password</label>
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
          />
        </div>
        <Link to="/home">
          <button
            className="loginBtn"
            variant="primary"
            type="submit"
            onClick={login}
          >
            log in
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LogIn;