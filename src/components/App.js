import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Waypoint from 'react-waypoint';
import Header from './Header';
import Home from './Home';
import Golf from './Golf';
import Resume from './Resume';
import Social from './Social';
import Blog from './Blog';
import config from '../config.js';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: "home"
    };
  }

  getBlogPosts() {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText);
        // TODO initialize state in constructor, then update it here; reference the state in the div of the site
      }
    };
    req.open("GET", config.getNicBlogPostsURL, true);
    req.send();
  }

  render() {
    this.getBlogPosts();
    return (
      <div className="App">
        <Header {...this.state} />
        <ScrollableAnchor id="home">
          <Waypoint onEnter={(data => this.setState({ activeSection: "home" }))} topOffset="50%">
            <div className="home section">
              <Home />
            </div>
          </Waypoint>    
        </ScrollableAnchor>
        <ScrollableAnchor id="golf">
          <Waypoint onEnter={(data => this.setState({ activeSection: "golf" }))} topOffset="50%">
            <div className="golf section">
              <Golf />
            </div>
          </Waypoint> 
        </ScrollableAnchor>
        <ScrollableAnchor id="resume">
          <Waypoint onEnter={(data => this.setState({ activeSection: "resume" }))} topOffset="50%">
            <div className="resume section">
              <Resume />
            </div>
          </Waypoint> 
        </ScrollableAnchor>
        <ScrollableAnchor id="social">
          <Waypoint onEnter={(data => this.setState({ activeSection: "social" }))} topOffset="50%">
            <div className="social section">
              <Social />
            </div>
          </Waypoint> 
        </ScrollableAnchor>
        <ScrollableAnchor id="blog">
          <Waypoint onEnter={(data => this.setState({ activeSection: "blog" }))} topOffset="50%">
            <div className="blog section">
              <Blog />
            </div>
          </Waypoint> 
        </ScrollableAnchor>
      </div>
    );
  }
}

export default App;
