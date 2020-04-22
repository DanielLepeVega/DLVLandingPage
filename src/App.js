import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Link to="/Users/daniellepevega/Documents/DLV Landing Page/my-app/src/index.html">App</Link>
      <Switch>
        <Route exact path="/Users/daniellepevega/Documents/DLV Landing Page/my-app/src/index.html"/>
      </Switch>
    </div>
    </Router>
    );
  }
}

export default App;
