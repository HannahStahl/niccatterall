import React, { Component } from 'react';
import '../styles/Golf.css';
import Card from './Card';
 
class Golf extends Component {
  render() {
    return (
      <div>
        <h1>PGA Player Showcase</h1>
        <h2 className="pga-subheader">Currently Working With Nic</h2>
        <div className="players">
          <Card
            name="Luke List"
            accolades="Ranked 64th in the PGA tour"
            backgroundImage={require("../player-headshots/luke-list.png")}
          />
          <Card
            name="Chris Kirk"
            accolades="Ranked 2nd in the 2014 FedExCup"
            backgroundImage={require("../player-headshots/chris-kirk.png")}
          />
          <Card
            name="Dylan Frittelli"
            accolades="Ranked 83rd in the PGA tour"
            backgroundImage={require("../player-headshots/dylan-frittelli.png")}
          />
          <Card
            name="Tom LoveLady"
            accolades="Tied for 2nd at 2018 Barbasol Championship"
            backgroundImage={require("../player-headshots/tom-lovelady.png")}
          />
          <Card
            name="D.A. Points"
            accolades="Earned 19 top 10 finishes"
            backgroundImage={require("../player-headshots/da-points.png")}
          />
        </div>
        <div className="pga-line-break" />
        <h2 className="pga-subheader">Previously Worked With Nic</h2>
        <div className="players">
          <Card
            name="Patrick Cantlay"
            accolades="Ranked 17th in the PGA tour"
            backgroundImage={require("../player-headshots/patrick-cantlay.png")}
          />
          <Card
            name="Steven Bowditch"
            accolades="Tied for 10th at 2012 Rex Hospital Open"
            backgroundImage={require("../player-headshots/steven-bowditch.png")}
          />
          <Card
            name="Zac Blair"
            accolades="Ranked 8th in Web.com tour"
            backgroundImage={require("../player-headshots/zac-blair.png")}
          />
          <Card
            name="Boo Weekley"
            accolades="Earned three 2nd place finishes"
            backgroundImage={require("../player-headshots/boo-weekley.png")}
          />
          <Card
            name="Ben Martin"
            accolades="Ranked 35th in 2015 FedEx Cup"
            backgroundImage={require("../player-headshots/ben-martin.png")}
          />
          <Card
            name="Cameron Percy"
            accolades="Ranked 16th in Web.com tour"
            backgroundImage={require("../player-headshots/cameron-percy.png")}
          />
        </div>
      </div>
    );
  }
}
 
export default Golf;
