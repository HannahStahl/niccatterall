import React, { Component } from 'react';
import '../styles/Golf.css';
import Card from './Card';
 
class Golf extends Component {
  render() {
    return (
      <div>
        <h1 className="golf-header">Athlete Showcase</h1>
        <div className="players">
          <Card backgroundImage={require("../player-headshots/luke-list.png")} />
          <Card backgroundImage={require("../player-headshots/zac-blair.png")} />
          <Card backgroundImage={require("../player-headshots/boo-weekley.png")} />
          <Card backgroundImage={require("../player-headshots/da-points.png")} />
          <Card backgroundImage={require("../player-headshots/patrick-cantlay.png")} />
          <Card backgroundImage={require("../player-headshots/chris-kirk.png")} />
          <Card backgroundImage={require("../player-headshots/ben-crane.png")} />
          <Card backgroundImage={require("../player-headshots/steven-bowditch.png")} />
          <Card backgroundImage={require("../player-headshots/cameron-percy.png")} />
        </div>
      </div>
    );
  }
}
 
export default Golf;
