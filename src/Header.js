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
              <NavItem
                eventKey={1}
                href="/#home"
                className={this.props.activeSection === "home" ? "active" : ""}
              >
                Home
              </NavItem>
              <NavItem
                eventKey={2}
                href="/#golf"
                className={this.props.activeSection === "golf" ? "active" : ""}
              >
                Golf
              </NavItem>
              <NavItem
                eventKey={3}
                href="/#resume"
                className={this.props.activeSection === "resume" ? "active" : ""}
              >
                Resume
              </NavItem>
              <NavItem
                eventKey={4}
                href="/#social"
                className={this.props.activeSection === "social" ? "active" : ""}
              >
                Social
              </NavItem>
              <NavItem
                eventKey={5}
                href="/#blog"
                className={this.props.activeSection === "blog" ? "active" : ""}
              >
                Blog
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="social-icons">
          <a href="https://www.instagram.com/cattogolf/" target="_blank" rel="noopener noreferrer">
            <img src="instagram.svg" width="28px" alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/nic.catterall.9" target="_blank" rel="noopener noreferrer">
            <img src="facebook.svg" width="28px" alt="Facebook" />
          </a>
          <a href="https://www.linkedin.com/in/nic-catterall-08914235" target="_blank" rel="noopener noreferrer">
            <img src="linkedin.svg" width="28px" alt="LinkedIn" />
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
