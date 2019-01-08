import React, { Component } from 'react';
import Affiliate from './Affiliate';
import '../styles/Footer.css';
 
class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div>
          <Affiliate
            name="Whoop"
            url="https://www.whoop.com"
            logo={require("../affiliate-logos/whoop.png")}
          />
          <Affiliate
            name="NoBull"
            url="https://www.nobullproject.com"
            logo={require("../affiliate-logos/nobull.jpg")}
          />
          <Affiliate
            name="Vuori"
            url="https://www.vuoriclothing.com"
            logo={require("../affiliate-logos/vuori.png")}
          />
          <Affiliate
            name="Chuck Cook"
            url="http://www.chuckcookgolf.com"
            logo={require("../affiliate-logos/chuckcookgolf.png")}
            width="150px"
          />
          <Affiliate
            name="Scott Hamilton"
            url="http://www.scotthamiltongolf.com"
            logo={require("../affiliate-logos/scotthamilton.png")}
            imageClassName="scott-hamilton-logo"
            width="130px"
          />
        </div>
        <p className="copyright">
          <img
            src={require("../social-icons/copyright.svg")}
            alt="Copyright"
            width="26px"
          /> Website created by <a
            href="https://www.linkedin.com/in/hannahlstahl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hannah Stahl
          </a>
        </p>
      </div>
    );
  }
}
 
export default Footer;