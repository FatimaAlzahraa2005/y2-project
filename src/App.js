import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
// pages
import Home from './Pages/Home';
import LogPage from './Pages/LogPage';
import Saved from './Pages/Saved';
import ContactUs from './Pages/ContactUs';
// components
import NavBar from './components/NavBar';
import Artist from './Pages/Artist';
import SubmissionForm from './Components/SubmissionForm';

function App() {
  const [auth, setAuth] = useState(localStorage.auth ? true : false);
  const [allSaved, setAllSaved] = useState(() => {
    if (localStorage.getItem('Saved')) {
      return JSON.parse(localStorage.getItem('Saved'));
    }
    return [];
  });
  useEffect(() => {
    localStorage.setItem('Saved', JSON.stringify(allSaved));
  }, [allSaved]);
  return (
    <div>
      <Router>
        <NavBar auth={auth} setAuth={setAuth} />
        <Routes>
          <Route
            path='/'
            exact
            element={auth ? <Home /> : <LogPage setAuth={setAuth} />}
          />
          {auth && (
            <>
              <Route path='/saved' element={<Saved allSaved={allSaved} />} />
              <Route path='/contactus' element={<ContactUs />} />
              <Route
                path='/artist/:artistId'
                element={
                  <Artist allSaved={allSaved} setAllSaved={setAllSaved} />
                }
              />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;