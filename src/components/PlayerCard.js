import React, { Component } from 'react';
import Card from './Card';
import '../styles/PlayerCard.css';
 
class PlayerCard extends Component {
  render() {
    return <Card
      title={this.props.athleteName}
      details={"Trained by Nic " + this.props.datesWithNic}
      backgroundImage={this.props.backgroundImage}
      cardContainerClass="player-card-container"
      cardClass="player-card"
      cardBackClass="player-card-back"
    />;
  }
}
 
export default PlayerCard;
