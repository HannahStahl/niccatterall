import React, { Component } from 'react';
import '../styles/Golf.css';
import Card from './Card';
 
class Golf extends Component {
  render() {
    return (
      <div>
        <h1>PGA Player Showcase</h1>
        <div className="players">
          <Card
            athleteName="Luke List"
            datesWithNic="since 2016"
            backgroundImage={require("../player-headshots/luke-list.png")}
          />
          <Card
            athleteName="Zac Blair"
            datesWithNic="since 2016"
            backgroundImage={require("../player-headshots/zac-blair.png")}
          />
          <Card
            athleteName="Boo Weekley"
            datesWithNic="since 2015"
            backgroundImage={require("../player-headshots/boo-weekley.png")}
          />
          <Card
            athleteName="D.A. Points"
            datesWithNic="" // get these from Nic
            backgroundImage={require("../player-headshots/da-points.png")}
          />
          <Card
            athleteName="Patrick Cantlay"
            datesWithNic="" // get these from Nic
            backgroundImage={require("../player-headshots/patrick-cantlay.png")}
          />
          <Card
            athleteName="Chris Kirk"
            datesWithNic="since 2017"
            backgroundImage={require("../player-headshots/chris-kirk.png")}
          />
          <Card
            athleteName="Ben Crane"
            datesWithNic="since 2017"
            backgroundImage={require("../player-headshots/ben-crane.png")}
          />
          <Card
            athleteName="Steven Bowditch"
            datesWithNic="from 2015 to 2016"
            backgroundImage={require("../player-headshots/steven-bowditch.png")}
          />
          <Card
            athleteName="Cameron Percy"
            datesWithNic="in 2016"
            backgroundImage={require("../player-headshots/cameron-percy.png")}
          />
        </div>
      </div>
    );
  }
}
 
export default Golf;
