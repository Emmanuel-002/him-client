import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="position-sticky top-0 header text-light bg-primary"
    >
      <Container>
        <Navbar.Brand>
          <Link to={'/'} className="link">
            041 CD
          </Link>{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
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
  );
};

export default Header;
