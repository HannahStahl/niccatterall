import React, { Component } from 'react';
import Card from './Card';
import '../styles/ResumeCard.css';
 
class ResumeCard extends Component {
  render() {
    return <Card
      title={this.props.eventName}
      details={this.props.eventDetails}
      backgroundImage={this.props.backgroundImage}
      cardContainerClass={"resume-card-container "+this.props.resumeCardContainerClass}
      cardClass="resume-card"
      cardBackClass="resume-card-back"
    />;
  }
}
 
export default ResumeCard;
