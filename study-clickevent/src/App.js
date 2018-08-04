import React, { Component } from 'react';

import {Provider} from './context/context';

import Contact from './Contact';
import Sports from './components/Sports';
import './App.css';

class App extends Component {
  constructor(){
    super();
    console.log("in constructor App");
    this.state = {
      city : ["chennai","mumbai","delhi","bangalore"],
      status : false
    };
  }
  triggerButtonNormal(name, e){
    console.log("in triggerButtonNormal ");
    console.log("e.target ",e.target);
    console.log("name ",name);
  }
  triggerButtonArrow = (name,e) => {
    console.log("in triggerButtonArrow ");
    console.log("e.target ",e.target);
    console.log("name ",name);
  };

  changeStatus =  () => {
    console.log("in changeStatus")
    this.setState({status : !this.state.status})
  }

  updateUser = ()=>{
    console.log("in updateUser");
  };

  render() {
    var {city,status} = this.state;
    status = status ? "true" : "false";
    return (
      <Provider>
        <div className="App">
          <h3>header</h3>
          <div>
            {/*city.map(item => <div>{item}</div>)*/}
            {city.map((item,index) => <div key={index}>{item}  - {index}</div>)}
            <div className="button" onClick={this.triggerButtonNormal.bind(this,"divine")}>button normal</div>
            <br /><br />
            <div className="button" onClick={this.triggerButtonArrow.bind(this,"divine")}>button Arrow</div>
            <div>
              status : {status} 
              <div className="button" onClick={this.changeStatus.bind(this)}>Change status</div>
            </div>
          </div>
          <Contact updateUser={this.updateUser} />
          <Sports />
        </div>
      </Provider>
    );
  }
}

export default App;
