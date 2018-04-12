import React, { Component } from 'react';

class Plant extends Component {
    componentDidMount(){
        console.log("plant props ", this.props);
    }
    render() {
        return (
            <div>
                in plant
            </div>
        );
    }
}

export default Plant;