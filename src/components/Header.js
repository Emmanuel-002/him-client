import React, { Fragment, useState } from 'react';
import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import '../styles/styles.css';
import Signin from './authentication/Signin';
import Signup from './authentication/Signup';

const Header = () => {
  const [signup, setSignup] = useState(false);
  const [signin, setSignin] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  return (
    <Fragment>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="position-sticky top-0 header text-light bg-primary"
      >
        <Container>
          <Navbar.Brand>
            <Link to={'/'} className="link">
              <img
                src="images/041cdlogo.jpg"
                alt="041 CD"
                className="w-5 h-5"
              />{' '}
              Medical Center
            </Link>{' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <NavLink>
                <Link
                  to={'/'}
                  className="link"
                  onClick={() => {
                    setSignin(true);
                  }}
                >
                  Sign in
                </Link>
              </NavLink>
              <NavLink>
                <Link
                  to={'/'}
                  className="link"
                  onClick={() => {
                    setSignup(true);
                  }}
                >
                  Sign up
                </Link>
              </NavLink>
              <NavLink>
                <Link
                  to={'/admin'}
                  className="link"
                  onClick={() => {
                    // setShow(true);
                  }}
                >
                  Admin
                </Link>
              </NavLink>
              <Nav.Link>
                <Link to={'/signup'} className="link">
                  Enrolment
                </Link>
              </Nav.Link>
              <NavDropdown title="Action" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <Link
                    to={'/statistics'}
                    className="text-decoration-none text-dark"
                  >
                    Statistics
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    to={'/population'}
                    className="text-decoration-none text-dark"
                  >
                    Population
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    to={'/referrer'}
                    className="text-decoration-none text-dark"
                  >
                    Referrer
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    to={'/encounter'}
                    className="text-decoration-none text-dark"
                  >
                    Encounter
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Signup
        show={signup}
        onHide={() => setSignup(false)}
        error={error}
        success={success}
      />
      <Signin show={signin} onHide={() => setSignin(false)} error={error} />
    </Fragment>
  );
};

export default Header;
