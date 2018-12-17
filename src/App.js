import React, { Component } from 'react';
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
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
