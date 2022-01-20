import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ auth, setAuth }) => {
  const logout = () => {
    localStorage.removeItem('auth');
    setAuth(false);
  };
  return (
    <div>
      <nav>
        <Link to='/' className='links'>
          <h2 style={{ color: 'white' }}>MGB</h2>
        </Link>
        {auth && (
          <>
            <ul className='navLinks'>
              <Link to='/' className='links'>
                <li>Home</li>
              </Link>
              <Link to='/saved' className='links'>
                <li>Saved</li>
              </Link>
              <Link to='/contactus' className='links'>
                <li>Contact Us</li>
              </Link>
            </ul>
          </>
        )}
        <div>
          <span className='navbar__status'>
            {auth ? (
              <button className='navBtn' onClick={logout}>
                <Link to='/' className='links'>
                  Logout
                </Link>
              </button>
            ) : (
              <Link to='/' className='links'>
                Login
              </Link>
            )}
          </span>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;