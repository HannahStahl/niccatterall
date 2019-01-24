import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import '../styles/Header.css';

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
                href="/#about"
                className={this.props.activeSection === "about" ? "active" : ""}
              >
                About
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
                href="/#blog"
                className={this.props.activeSection === "blog" ? "active" : ""}
              >
                Blog
              </NavItem>
              <NavItem
                eventKey={4}
                href="/#social"
                className={this.props.activeSection === "social" ? "active" : ""}
              >
                Social
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="social-icons">
          <a href="https://www.instagram.com/cattogolf/" target="_blank" rel="noopener noreferrer">
            <img src={require("../social-icons/instagram.svg")} width="28px" alt="Instagram" />
          </a>
          <a href="https://twitter.com/bowdo83" target="_blank" rel="noopener noreferrer">
            <img src={require("../social-icons/twitter.svg")} width="28px" alt="Twitter" />
          </a>
          <a href="https://www.facebook.com/nic.catterall.9" target="_blank" rel="noopener noreferrer">
            <img src={require("../social-icons/facebook.svg")} width="28px" alt="Facebook" />
          </a>
          <a href="https://www.linkedin.com/in/nic-catterall-08914235" target="_blank" rel="noopener noreferrer">
            <img src={require("../social-icons/linkedin.svg")} width="28px" alt="LinkedIn" />
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
