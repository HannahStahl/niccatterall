import React, { Component } from 'react';
import '../styles/Programs.css';

class Programs extends Component {
  render() {
    const programs = [
      {
        name: "Strength Training",
        description: "30 days. Beginner - Advanced.",
        image: require("../program-thumbnails/program1.png"),
        url: "https://www.google.com",
      },
      {
        name: "High-Intensity Interval Training",
        description: "30 days. Beginner - Advanced.",
        image: require("../program-thumbnails/program2.png"),
        url: "https://www.facebook.com",
      },
      {
        name: "Cardio Training",
        description: "30 days. Beginner - Advanced.",
        image: require("../program-thumbnails/program3.png"),
        url: "https://www.instagram.com",
      },
    ];
    return (
      <div className="training-programs">
        <h1>Training Programs</h1>
        <div className="training-programs-container">
          <p className="training-programs-description">
            Nic offers training programs designed for all levels of competency and exercise experience, 
            which can be performed right at home. Advanced sport-specific coaching is available 
            and personalized with monitoring and communication options at various levels. 
            For more information and purchasing options, click on the links provided here.
          </p>
          <div className="training-programs-list">
            {programs.map(program => (
              <a key={program.name} href={program.url} target="_blank" rel="noopener noreferrer">
                <div className="training-program">
                  <img src={program.image} alt={program.name} />
                  <div className="training-program-details">
                    <h2>{program.name}</h2>
                    <p>{program.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Programs;
