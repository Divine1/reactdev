import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as type from '../store/type';

class Counter extends Component{
    constructor(){
        super();
        console.log("in constructor");

    }

    render(){
        return(
            <div>
                <div>in counter</div>
                <div>Counter value : {this.props.counter}</div>
                <button onClick={this.props.incrementCounter}>Increment Counter</button>
                <button onClick={() => this.props.decrementCounter()}>Decrement Counter</button>
            </div>
        )
    }
} 

const mapStateToProps = (state) =>{
    console.log("in mapStateToProps")
    return{
        counter : state.counter
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        incrementCounter : ()=>{
            dispatch({type : type.INCREMENT, payload : {input : "hi"}})
        },
        decrementCounter : ()=>{
            dispatch({type : type.DECREMENT})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);