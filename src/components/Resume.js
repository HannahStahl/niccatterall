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
          <p className="timeline-date date-right current">2015 - current</p>
          <div className="timeline-container right">
            <ResumeCard
              eventName="Edith Cowan University"
              eventDetails="Master's degree in Exercise Science with specialty in Strength and Conditioning"
              backgroundImage={require("../resume-images/edith-cowan-university.png")}
              resumeCardContainerClass="right-resume-card-container"
            />
          </div>
          <p className="timeline-date date-left">2016 - 2019</p>
          <div className="timeline-container left">
            <ResumeCard
              eventName="Sports Therapy Australia"
              eventDetails="Director and Musculoskeletal Therapist"
              backgroundImage={require("../resume-images/sports-therapy-australia.jpeg")}
              resumeCardContainerClass="left-resume-card-container"
            />
          </div>
          <p className="timeline-date date-right">2010 - 2015</p>
          <div className="timeline-container right">
            <ResumeCard
              eventName="Cricket Australia"
              eventDetails="Sports Therapist"
              backgroundImage={require("../resume-images/cricket-australia.jpg")}
              resumeCardContainerClass="right-resume-card-container"
            />
          </div>
          <p className="timeline-date date-left">2011 - 2013</p>
          <div className="timeline-container left">
            <ResumeCard
              eventName="Brisbane Lions"
              eventDetails="Assistant Therapist"
              backgroundImage={require("../resume-images/brisbane-lions.png")}
              resumeCardContainerClass="left-resume-card-container"
            />
          </div>
          <p className="timeline-date date-right">2010 - 2013</p>
          <div className="timeline-container right">
            <ResumeCard
              eventName="Health and Fitness Australia"
              eventDetails="Co-Director and Trainer"
              backgroundImage={require("../resume-images/health-and-fitness-australia.png")}
              resumeCardContainerClass="right-resume-card-container"
            />
          </div>
          <p className="timeline-date date-left">2011 - 2012</p>
          <div className="timeline-container left">
            <ResumeCard
              eventName="Brisbane Roar"
              eventDetails="Sports Therapist"
              backgroundImage={require("../resume-images/brisbane-roar.png")}
              resumeCardContainerClass="left-resume-card-container"
            />
          </div>
          <p className="timeline-date date-right">2010 - 2012</p>
          <div className="timeline-container right">
            <ResumeCard
              eventName="University of Queensland"
              eventDetails="Bachelor of Exercise and Sports Science"
              backgroundImage={require("../resume-images/university-of-queensland.png")}
              resumeCardContainerClass="right-resume-card-container"
            />
          </div>
          <p className="timeline-date date-left">2010 - 2011</p>
          <div className="timeline-container left">
            <ResumeCard
              eventName="Endeavour College of Natural Health"
              eventDetails="BHSc in Musculoskeletal Therapy, Health Professions, and Related Clinical Sciences"
              backgroundImage={require("../resume-images/endeavour-college.png")}
              resumeCardContainerClass="left-resume-card-container"
            />
          </div>
          <p className="timeline-date date-right">2006 - 2009</p>
        </div>
      </div>
    );
  }
}
 
export default Resume;
