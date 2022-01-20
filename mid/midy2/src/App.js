import React, { useState } from "react";
import "./App.css";
import LogIn from "./Components/LogIn";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Product from "./Components/Product";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Cart from "./Components/Cart";
import ContactUs from "./Components/ContactUs";

function App() {
  const [loggedIn, SetloggedIn] = useState(() => {
    if (localStorage.getItem("LoggedIn") === "true") {
      return true;
    } else {
      return false;
    }
  });
  return (
    <Router>
      <div className="App">
        <Nav loggedIn={loggedIn} SetloggedIn={SetloggedIn} />
        <Routes>
          <Route
            path="/"
            element={<LogIn loggedIn={loggedIn} SetloggedIn={SetloggedIn} />}
          />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
