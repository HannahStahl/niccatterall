import React, { Component } from 'react';
import '../styles/Home.css';
 
class Home extends Component {
  render() {
    return (
      <div className="home-text">
        <h1 className="home-header">
          NIC CATTERALL
        </h1>
        <p className="mission-statement">
        Enhancing the athletic performance of professional golfers through a scientific approach to strength and conditioning
        </p>
      </div>
    );
  }
}
 
export default Home;
