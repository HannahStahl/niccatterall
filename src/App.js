import React, { Component } from 'react';
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
    // TODO move URL to a config file, where you will also add dev URL
    // TODO change URL to use Nic's userId once you create his user
    // (userId part of URL will also be determined based on prod/dev in config)
    req.open("GET", "https://me3t2amdo0.execute-api.us-east-1.amazonaws.com/prod/blogPostsForUser/us-east-1:22a88420-f710-49f6-b205-e76ef4ddf3ff", true);
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
