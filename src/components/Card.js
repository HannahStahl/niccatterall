import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import '../styles/Card.css';
 
class Card extends Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <div className="card-container">
        <ReactCardFlip isFlipped={this.state.isFlipped}>
          <div
            key="front"
            className="card"
            onClick={this.handleClick}
          >
            <img
              src={this.props.backgroundImage}
              alt="PGA headshot"
              width="100%"
            />
          </div>
          <div
            key="back"
            className="card card-back"
            onClick={this.handleClick}
          >
            <h4>{this.props.athleteName.toUpperCase()}</h4>
            <p className="athlete-dates">Trained by Nic {this.props.datesWithNic}</p>
          </div>
        </ReactCardFlip>
      </div>
    );
  }
}
 
export default Card;
