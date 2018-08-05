import React, {Component} from 'react';

class Home extends Component{
    constructor(){
        super();
        console.log("in constructor Home")
    }

    render(){
        return(
            <div>
                <h3>Home</h3>
            </div>
        )
    }
} 
/* const Home = () =>{
    return (
        <div>
            <h3>Home</h3>
        </div>
    )
} */

export default Home;