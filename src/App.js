import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './Home';
import Post from './Post';

import { Provider } from 'react-redux';
import store from './redux/store'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/post/:id' component={Post} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
