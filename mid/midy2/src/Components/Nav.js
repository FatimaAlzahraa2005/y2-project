import React from "react";
import "../Styles/Nav.css";
import { Link } from "react-router-dom";

function Nav({ loggedIn, SetloggedIn }) {
  const logout = () => {
    SetloggedIn(false);
    localStorage.setItem("LoggedIn", "false");
  };
  return (
    <div className="Nav">
      <p>Fake Amazon</p>
      {loggedIn && (
        <ul className="NavLinks">
          <Link className="NavLink" to="/home">
            <li>Home</li>
          </Link>
          <Link className="NavLink" to="/cart">
            <li>Cart</li>
          </Link>

          <Link className="NavLink" to="/contactUs">
            <li>Contact Us</li>
          </Link>
          <Link className="NavLink" to="/">
            <li onClick={logout}>Log Out</li>
          </Link>
        </ul>
      )}
    </div>
  );
}

export default Nav;