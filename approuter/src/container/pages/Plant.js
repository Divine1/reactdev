import React, { Component } from 'react';

import PalmTree from './plant/PalmTree';

class Plant extends Component {
    componentDidMount(){
        console.log("plant props ", this.props);
        console.log("plant id ", this.props.match.params.id);
    }
    actionHandler(){
        //this.props.history.push("/animal");
        this.props.history.replace("/animal");
    }

    render() {
        return (
            <div>
                in plant
                <PalmTree />
                <button onClick={(event)=> this.actionHandler()} >Click </button>
            </div>
        );
    }
}

export default Plant;