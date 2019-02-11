import React, { Component } from 'react';
import '../styles/About.css';
 
class About extends Component {
  render() {
    return (
      <div>
        <h1>About Nic</h1>
        <p className="bio">
          Nic Catterall is an Australian high-performance coach, 
          specializing in Musculoskeletal Therapy and Strength & Conditioning 
          for professional golfers on the PGA Tour in the U.S. 
          With over five years of tour experience, plus 10 years of clinical 
          and industry experience across multiple sporting codes, 
          Nic takes a tailored approach to each athlete he works with. 
          <br /><br />
          Nic believes in training athletes to be formidable to their core - 
          not just in performance, but in life. 
          By seeking out areas for improvement, enhancing exceptional qualities, 
          and encouraging fluid adaptation, Nic helps his clients succeed 
          in an ever-changing world. He encourages hard and smart work 
          aimed at developing body, brain, and character.
        </p>
      </div>
    );
  }
}
 
export default About;
