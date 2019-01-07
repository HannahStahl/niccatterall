import React, { Component } from 'react';
import ResumeCard from './ResumeCard';
import '../styles/Resume.css';
 
class Resume extends Component {
  render() {
    return (
      <div>
        <h1>Experience</h1>
        <div className="timeline">
          <div className="timeline-container left">
            <ResumeCard
              eventName="PGA Tour"
              eventDetails="Details go here"
              backgroundImage={require("../resume-images/pga-tour.png")}
              resumeCardContainerClass="left-resume-card-container"
            />
          </div>
          <div className="timeline-container right">
            <ResumeCard
              eventName="Sports Therapy Australia"
              eventDetails="Details go here"
              backgroundImage={require("../resume-images/sports-therapy-australia.jpeg")}
              resumeCardContainerClass="right-resume-card-container"
            />
          </div>
          <div className="timeline-container left">
            <ResumeCard
              eventName="Cricket Australia"
              eventDetails="Details go here"
              backgroundImage={require("../resume-images/cricket-australia.jpg")}
              resumeCardContainerClass="left-resume-card-container"
            />
          </div>
          <div className="timeline-container right">
            {/* TODO Replace with Health and Fitness Australia once you get that image */}
            <ResumeCard
              eventName="Brisbane Roar"
              eventDetails="Details go here"
              backgroundImage={require("../resume-images/brisbane-roar.png")}
              resumeCardContainerClass="right-resume-card-container"
            />
          </div>
          <div className="timeline-container left">
            <ResumeCard
              eventName="Brisbane Lions"
              eventDetails="Details go here"
              backgroundImage={require("../resume-images/brisbane-lions.png")}
              resumeCardContainerClass="left-resume-card-container"
            />
          </div>
          <div className="timeline-container right">
            <ResumeCard
              eventName="Brisbane Roar"
              eventDetails="Details go here"
              backgroundImage={require("../resume-images/brisbane-roar.png")}
              resumeCardContainerClass="right-resume-card-container"
            />
          </div>
        </div>
      </div>
    );
  }
}
 
export default Resume;
