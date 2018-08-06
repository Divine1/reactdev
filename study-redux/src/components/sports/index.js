import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getSports,addSport} from '../../redux/actions/sportActions';

class Sports extends Component{

    constructor(){
        super();
        console.log("in constructor Sports")
        /* this.id= React.createRef();
        this.country=React.createRef();
        this.player=React.createRef(); */
        this.state = {
            id : "",
            country : "",
            player : ""
        }
    }
    componentDidMount(){
        console.log("in componentDidMount")
        console.log(this.props.getSports)
        //this.props.getSports();
    }
    onchangedata =  (e)=>{
       //console.log("onchangedata e ",e.target)
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    addSportData=(e) => {
        console.log("in addSportData ",this.state)
        const sport = {
            ...this.state
        };
        console.log("sport ",sport);
        this.props.addSport(sport);
    }

    render(){
        const printProps = this.props.sportsdata.map(item => <div key={item.id}>{item.country}</div>)
        //const printProps = JSON.stringify(this.props.getSports());
        
        return(
            <div>
                <h3>Sports Component</h3>
                <div>
                    {printProps}
                </div>
                <div>
                    <h4>Add Sport</h4>
                    <div>
                        <input type="text" name="id" placeholder="Your id"
                        onChange={this.onchangedata} />
                    </div>
                    <div>
                        <input type="text" name="country" placeholder="Your country"
                        onChange={this.onchangedata}  />
                    </div>
                    <div>
                        <input type="text" name="player" placeholder="player name"
                        onChange={this.onchangedata}  />
                    </div>
                    <div>
                        <button onClick={this.addSportData}>Add Sport</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        //directly access the state
        sportsdata : state.sport.sports
    }
};

export default connect(mapStateToProps,{getSports,addSport})(Sports);