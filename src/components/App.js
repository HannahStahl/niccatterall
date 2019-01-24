import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './Main';
import BlogFull from './BlogFull';

class App extends Component {
  render() {
    return(
      <Router>
        <div>
          <Route path="/" exact component={Main} />
          <Route path="/blog/" component={BlogFull} />
        </div>
      </Router>
    );
  }
}

export default App;
