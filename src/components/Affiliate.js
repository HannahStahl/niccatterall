import React, { Component } from 'react';
import '../styles/Affiliate.css';
 
class Affiliate extends Component {
  render() {
    return (
      <a
        href={this.props.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={this.props.logo}
          alt={this.props.name}
          width={this.props.width || "100px"}
          className={this.props.imageClassName || ""}
        />
      </a>
    );
  }
}
 
export default Affiliate;
