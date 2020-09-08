import React, { Component } from 'react';
import '../styles/Golf.css';
import Card from './Card';
 
class Golf extends Component {
  constructor(props) {
    super(props);
    this.downCarat = require("../misc-icons/down-carat.svg");
    this.upCarat = require("../misc-icons/up-carat.svg");
    this.state = {
      pastClientsVisible: false,
      pastClientsText: "Show past clients ",
      pastClientsCarat: this.downCarat
    };
    this.togglePastClients = this.togglePastClients.bind(this);
  }

  togglePastClients() {
    if (this.state.pastClientsVisible) {
      this.setState({
        pastClientsVisible: false,
        pastClientsText: "Show past clients ",
        pastClientsCarat: this.downCarat
      });
    } else {
      this.setState({
        pastClientsVisible: true,
        pastClientsText: "Hide past clients ",
        pastClientsCarat: this.upCarat
      });
    }
  }

  render() {
    return (
      <div>
        <h1>PGA Client Showcase</h1>
        <div className="players">
          <Card
            name="Dylan Frittelli"
            accolades="Ranked 97th in the PGA tour"
            backgroundImage={require("../player-headshots/dylan-frittelli.png")}
          />
          <Card
            name="Chris Kirk"
            accolades="Ranked 2nd in the 2014 FedExCup"
            backgroundImage={require("../player-headshots/chris-kirk.png")}
          />
          <Card
            name="Luke List"
            accolades="Ranked 88th in the PGA tour"
            backgroundImage={require("../player-headshots/luke-list.png")}
          />
          <Card
            name="D.A. Points"
            accolades="Earned 19 top 10 finishes"
            backgroundImage={require("../player-headshots/da-points.png")}
          />
          <Card
            name="Cameron Smith"
            accolades="Ranked 49th in the PGA tour"
            backgroundImage={require("../player-headshots/cameron-smith.png")}
          />
        </div>
        <p className="show-past-clients" onClick={this.togglePastClients}>
          {this.state.pastClientsText}
          <img src={this.state.pastClientsCarat} width="20px" alt="Arrow" />
        </p>
        <div className={this.state.pastClientsVisible ? "players" : "hidden players"}>
          <Card
            name="Zac Blair"
            accolades="Ranked 8th in Web.com tour"
            backgroundImage={require("../player-headshots/zac-blair.png")}
          />
          <Card
            name="Steven Bowditch"
            accolades="Tied for 10th at 2012 Rex Hospital Open"
            backgroundImage={require("../player-headshots/steven-bowditch.png")}
          />
          <Card
            name="Patrick Cantlay"
            accolades="Ranked 7th in the PGA tour"
            backgroundImage={require("../player-headshots/patrick-cantlay.png")}
          />
          <Card
            name="Kyoung-Hoon Lee"
            accolades="Earned two top 10 finishes"
            backgroundImage={require("../player-headshots/kh-lee.png")}
          />
          <Card
            name="Tom LoveLady"
            accolades="Tied for 2nd at 2018 Barbasol Championship"
            backgroundImage={require("../player-headshots/tom-lovelady.png")}
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
          <Card
            name="Kyle Stanley"
            accolades="Ranked 65th in the PGA tour"
            backgroundImage={require("../player-headshots/kyle-stanley.png")}
          />
          <Card
            name="Boo Weekley"
            accolades="Earned three 2nd place finishes"
            backgroundImage={require("../player-headshots/boo-weekley.png")}
          />
        </div>
      </div>
    );
  }
}
 
export default Golf;
