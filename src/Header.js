import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './App.css';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div>
          <Navbar collapseOnSelect fixedTop>
            <Navbar.Header>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="/#home">
                  Home
                </NavItem>
                <NavItem eventKey={2} href="/#golf">
                  Golf
                </NavItem>
                <NavItem eventKey={3} href="/#resume">
                  Resume
                </NavItem>
                <NavItem eventKey={3} href="/#social">
                  Social
                </NavItem>
                <NavItem eventKey={3} href="/#blog">
                  Blog
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
      </div>
    );
  }
}

export default Header;
