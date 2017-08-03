import React from 'react';
import {
  Link
} from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem,
} from 'react-bootstrap';

import './App.css';

const Navigation = () => (
  <Navbar id="navbar" inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a id="navbar-text" href="/">Clerk.</a>
      </Navbar.Brand>
      <Navbar.Toggle id="navbar-toggle"/>
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1}><Link className="nav-link" to="/">Home</Link></NavItem>
        <NavItem eventKey={2}><Link className="nav-link" to="/hospitals">Clerk</Link></NavItem>
        <NavItem eventKey={3}><Link className="nav-link" to="/profile">Profile</Link></NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Navigation;

/*
<div>
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/hospitals">Find Patient</Link></li>
    <li><Link to="/login">Login</Link></li>
  </ul>
</div
*/
