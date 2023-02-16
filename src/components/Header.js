import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
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
            <NavDropdown
              title="Action"
              id="collasible-nav-dropdown"
              className="link"
            >
              <NavDropdown.Item href="#action/3.1">Statistics</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Referrer</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Encounter</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Population Data
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
