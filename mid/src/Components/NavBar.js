import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const NavBar = ({ auth, setAuth }) => {
  const logout = () => {
    setAuth(false);
    window.localStorage.removeItem("auth");
  };
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="navbar__link navbar__brand">
              Teache
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {auth && (
                <>
                  <Nav.Link>
                    <Link to="/" className="navbar__link">
                      Home
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/saved" className="navbar__link">
                      Saved
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/contactus" className="navbar__link">
                      Contact Us
                    </Link>
                  </Nav.Link>
                </>
              )}
            </Nav>
            <div>
              <span className="navbar__status">
                {auth ? (
                  <button className="navbar__status__message" onClick={logout}>
                    Logout
                  </button>
                ) : (
                  <Link to="/" className="navbar__link">
                    Login
                  </Link>
                )}
              </span>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>{" "}
    </div>
  );
};

export default NavBar;