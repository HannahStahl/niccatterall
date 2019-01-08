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
              eventDetails="Musculoskeletal Therapist and Physical Trainer"
              backgroundImage={require("../resume-images/pga-tour.png")}
              resumeCardContainerClass="left-resume-card-container"
            />
          </div>
          <div className="timeline-container right">
            <ResumeCard
              eventName="Sports Therapy Australia"
              eventDetails="Director and Musculoskeletal Therapist"
              backgroundImage={require("../resume-images/sports-therapy-australia.jpeg")}
              resumeCardContainerClass="right-resume-card-container"
            />
          </div>
          <div className="timeline-container left">
            <ResumeCard
              eventName="Cricket Australia"
              eventDetails="Sports Therapist"
              backgroundImage={require("../resume-images/cricket-australia.jpg")}
              resumeCardContainerClass="left-resume-card-container"
            />
          </div>
          <div className="timeline-container right">
            {/* TODO Replace with Health and Fitness Australia once you get that image */}
            <ResumeCard
              eventName="Health and Fitness Australia"
              eventDetails="Co-Director and Trainer"
              backgroundImage={require("../resume-images/brisbane-roar.png")}
              resumeCardContainerClass="right-resume-card-container"
            />
          </div>
          <div className="timeline-container left">
            <ResumeCard
              eventName="Brisbane Lions"
              eventDetails="Assistant Therapist"
              backgroundImage={require("../resume-images/brisbane-lions.png")}
              resumeCardContainerClass="left-resume-card-container"
            />
          </div>
          <div className="timeline-container right">
            <ResumeCard
              eventName="Brisbane Roar"
              eventDetails="Sports Therapist"
              backgroundImage={require("../resume-images/brisbane-roar.png")}
              resumeCardContainerClass="right-resume-card-container"
            />
          </div>
          <div className="timeline-container left">
            <ResumeCard
              eventName="Edith Cowan University"
              eventDetails="Master's degree in Exercise Science with specialty in Strength and Conditioning"
              backgroundImage={require("../resume-images/edith-cowan-university.png")}
              resumeCardContainerClass="left-resume-card-container"
            />
          </div>
          <div className="timeline-container right">
            <ResumeCard
              eventName="University of Queensland"
              eventDetails="Bachelor of Exercise and Sports Science"
              backgroundImage={require("../resume-images/university-of-queensland.png")}
              resumeCardContainerClass="right-resume-card-container"
            />
          </div>
          <div className="timeline-container left">
            <ResumeCard
              eventName="Endeavour College of Natural Health"
              eventDetails="BHSc in Musculoskeletal Therapy, Health Professions, and Related Clinical Sciences"
              backgroundImage={require("../resume-images/endeavour-college.png")}
              resumeCardContainerClass="left-resume-card-container"
            />
          </div>
        </div>
      </div>
    );
  }
}
 
export default Resume;
