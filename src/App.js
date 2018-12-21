import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Header from './Header';
import Home from './Home';
import Golf from './Golf';
import Resume from './Resume';
import Social from './Social';
import Blog from './Blog';
import config from './config.js';
import './App.css';

class App extends Component {
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
        <Header />
        <ScrollableAnchor id="home">
          <div className="home section">
            <Home />
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id="golf">
          <div className="golf section">
            <Golf />
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id="resume">
          <div className="resume section">
            <Resume />
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id="social">
          <div className="social section">
            <Social />
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id="blog">
          <div className="blog section">
            <Blog />
          </div>
        </ScrollableAnchor>
      </div>
    );
  }
}

export default App;
