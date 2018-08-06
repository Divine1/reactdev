import React,{Component} from 'react';
import {connect} from 'react-redux';
import {GET_SPORTS} from '../../redux/actions/types';
class Sports extends Component{

    constructor(){
        super();
        console.log("in constructor Sports")
    }
    componentDidMount(){
        console.log("in componentDidMount")
        console.log(this.props.getSports)
        this.props.getSports();
    }
    render(){
        const printProps = JSON.stringify(this.props);
        //const printProps = JSON.stringify(this.props.getSports());
        
        return(
            <div>
                <h3>Sports Component</h3>
                <div>
                    {printProps}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sportsdata : state.sport.sports
    }
};
const mapDispatchToProps = (dispatch) =>({
    getSports : ()=> dispatch({type : GET_SPORTS})
});

export default connect(mapStateToProps,mapDispatchToProps)(Sports);