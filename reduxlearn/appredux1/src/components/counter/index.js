import React,{Component} from 'react';
import {connect} from 'react-redux';
import {INCREMENT_COUNTER} from '../../store/actions/types';

class Counter extends Component{
    constructor(){
        super();
        
    }
    render(){
        return(
            <div>
                <h3>Counter</h3>
                <div>
                    <div>counter {this.props.counter}</div>
                    <div><button onClick={this.props.incrementCounter}>Increment</button></div>

                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        counter : state.counter
    }
};

const mapDispatchToProps = (dispatch) =>{
    return{
        incrementCounter : ()=> {
            dispatch({type : INCREMENT_COUNTER})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);