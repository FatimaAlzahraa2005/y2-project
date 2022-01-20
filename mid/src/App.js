import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// pages
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Saved from "./Pages/Saved";
import ContactUs from "./Pages/ContactUs";

// components
import NavBar from "./Components/NavBar";
import SubmissionForm from "./Components/SubmissionForm";
import University from "./Pages/University";
function App() {
  const [auth, setAuth] = useState(() => {
    let localValue = window.localStorage.getItem("auth");
    if (localValue) {
      return JSON.parse(localValue);
    }
    return false;
  });
  const [saved, setSaved] = useState(() => {
    let localValue = window.localStorage.getItem("saved");
    if (localValue) {
      return JSON.parse(localValue);
    }
    return [];
  });
  useEffect(() => {
    window.localStorage.setItem("saved", JSON.stringify(saved));
  }, [saved]);

  return (
    <div>
      <Router>
        <NavBar auth={auth} setAuth={setAuth} />
        <Routes>
          <Route
            path="/"
            element={auth ? <Home /> : <Login setAuth={setAuth} />}
          />
          <Route path="/saved" element={<Saved saved={saved} auth={auth} />} />
          <Route path="/contactus" element={<ContactUs auth={auth} />} />
          <Route
            path="/submissionform"
            element={<SubmissionForm auth={auth} />}
          />
          <Route
            path="/university/:name"
            element={
              <University saved={saved} setSaved={setSaved} auth={auth} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
