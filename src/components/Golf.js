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
            athleteName="Chris Kirk"
            datesWithNic="since 2017"
            backgroundImage={require("../player-headshots/chris-kirk.png")}
          />
          <Card
            athleteName="Dylan Frittelli"
            datesWithNic="since ?" // TODO get this from Nic
            backgroundImage={require("../player-headshots/dylan-frittelli.png")}
          />
          <Card
            athleteName="Tom LoveLady"
            datesWithNic="since ?" // TODO get this from Nic
            backgroundImage={require("../player-headshots/tom-lovelady.png")}
          />
          <Card
            athleteName="D.A. Points"
            datesWithNic="since ?" // TODO get this from Nic
            backgroundImage={require("../player-headshots/da-points.png")}
          />
          <Card
            athleteName="Patrick Cantlay"
            datesWithNic="?" // TODO get this from Nic
            backgroundImage={require("../player-headshots/patrick-cantlay.png")}
          />
          <Card
            athleteName="Steven Bowditch"
            datesWithNic="from 2015 to 2016"
            backgroundImage={require("../player-headshots/steven-bowditch.png")}
          />
          <Card
            athleteName="Zac Blair"
            datesWithNic="from 2016 to 2018"
            backgroundImage={require("../player-headshots/zac-blair.png")}
          />
          <Card
            athleteName="Boo Weekley"
            datesWithNic="from 2015 to 2018"
            backgroundImage={require("../player-headshots/boo-weekley.png")}
          />
          <Card
            athleteName="Ben Martin"
            datesWithNic="?" // TODO get this from Nic
            backgroundImage={require("../player-headshots/ben-martin.png")}
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
