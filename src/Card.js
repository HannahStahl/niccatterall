import React, { Component } from 'react';
import './Card.css';
 
class Card extends Component {
  render() {
    return (
      <div className="card" style={{ "backgroundImage": `url(${this.props.backgroundImage})` }} />
    );
  }
}
 
export default Card;
