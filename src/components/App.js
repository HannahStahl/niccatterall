import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './Main';
import BlogFull from './BlogFull';
import BlogPost from './BlogPost';

class App extends Component {
  render() {
    return(
      <Router>
        <div>
          <Route path="/" exact component={Main} />
          <Route path="/blog/" exact component={BlogFull} />
          <Route path="/blog/:id" exact component={BlogPost} />
        </div>
      </Router>
    );
  }
}

export default App;
