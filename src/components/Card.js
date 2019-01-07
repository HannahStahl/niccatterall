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
      <div className={"card-container "+this.props.cardContainerClass}>
        <ReactCardFlip isFlipped={this.state.isFlipped}>
          <div
            key="front"
            className={"card "+this.props.cardClass}
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
            className={"card card-back "+this.props.cardBackClass}
            onClick={this.handleClick}
          >
            <h2>{this.props.title.toUpperCase()}</h2>
            <p className="card-details">{this.props.details}</p>
          </div>
        </ReactCardFlip>
      </div>
    );
  }
}
 
export default Card;
