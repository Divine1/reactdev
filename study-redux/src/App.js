import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import './App.css';
import Home from './components/home';
import Sports from './components/sports';
import Aboutus from './components/aboutus';
import Header from './components/header';
import {Provider} from 'react-redux';
import Store from './redux/Store';


class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Router>
          <div className="container">
            <Header />
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/aboutus" component={Aboutus}/>
              <Route exact path="/sports" component={Sports}/>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
