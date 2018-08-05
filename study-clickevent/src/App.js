import React, { Component } from 'react';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {Provider} from './context/context';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/about/About';
import Careers from './components/careers/Careers';
import NotFound from './components/NotFound';

import './App.css';

class App extends Component {
  constructor(){
    super();
    console.log("in constructor App");

  }
  render() {

    return (
      <Provider>
        <Router>
          <div className="container">
            <Header />
            <div className="body">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about/:id" component={About} />
                <Route exact path="/careers" component={Careers} />
                <Route component={NotFound} />
                
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
