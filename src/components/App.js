import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Waypoint from 'react-waypoint';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Golf from './Golf';
import About from './About';
import Social from './Social';
import Blog from './Blog';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: "home"
    };
  }

  render() {
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
        <ScrollableAnchor id="about">
          <Waypoint onEnter={(data => this.setState({ activeSection: "about" }))} topOffset="50%">
            <div className="about section">
              <About />
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
        <ScrollableAnchor id="blog">
          <Waypoint onEnter={(data => this.setState({ activeSection: "blog" }))} topOffset="50%">
            <div className="blog section">
              <Blog />
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
        <Footer />
      </div>
    );
  }
}

export default App;
