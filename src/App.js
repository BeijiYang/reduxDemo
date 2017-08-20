import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './Home';
import Post from './Post';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/post' component={Post} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
