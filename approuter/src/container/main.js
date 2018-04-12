import React,{Component} from 'react';
import {Route,Link} from 'react-router-dom';
import Animal from './pages/Animal';
import Plant from './pages/Plant';

class Main extends Component{
    render(){
        return (
            <div>
                <h2>in main</h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/animal">Animal</Link></li>
                    <li><Link to="/plant">Plant</Link></li>
                </ul>
                <hr />
                <Route path="/" render ={() => <h1>in route</h1>} />
                <Route path="/animal" component={Animal} />
                <Route path="/plant" component={Plant} />
            </div>
        );
    }
}

export default Main;