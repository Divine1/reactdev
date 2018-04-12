import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class PalmTree extends Component {

    componentDidMount(){
        console.log("palm props ",this.props);
    }
    render() {
        return (
            <div>
                PalmTree
            </div>
        );
    }
}

export default withRouter(PalmTree);
