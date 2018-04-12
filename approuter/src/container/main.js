import React,{Component} from 'react';
import {Route,NavLink,Switch,Redirect} from 'react-router-dom';
import Animal from './pages/Animal';
import Plant from './pages/Plant';

class Main extends Component{
    render(){
        return (
            <div>
                <h2>in main</h2>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/animal">Animal</NavLink></li>
                    {/* <li><Link to="/plant">Plant</Link></li> */}
                    <li><NavLink to={{
                        pathname : "/plant/"+"divine",
                        hash : "#submit",
                        search : "?quick=true"
                    }} 
                    >Plant</NavLink></li>
                </ul>
                <hr />
                <Switch>
                    <Route path="/animal" component={Animal} />
                    <Route path="/plant/:id" component={Plant} />
                    {/* <Route path="/" render ={() => <h1>in route</h1>} /> */}
                    {/* <Redirect from="/" to="/animal" /> */}
                    <Route render={()=> <h1>not found</h1>} />
                </Switch>
            </div>
        );
    }
}

export default Main;
/* 
activeClassName="my-class" 
                    activeStyle={{
                        color: "orange",
                        textDecoration : "none"
                    }} */