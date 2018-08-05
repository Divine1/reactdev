import React,{Component} from 'react';
import FormElements from '../../factory/FormElements';
import classnames from 'classnames';

class Careers extends Component{
    constructor(){
        super()
        this.state = {
            firstname: "pluto",
            statustest : true
        }
    }
    onchange = ()=>{
        console.log("in onchange");

    }
    render(){
        return (
            <div>
                <h3>Careers</h3>
                <div>
                    <FormElements 
                        label="Enter your Firstname"
                        type="text"
                        name="firstname"
                        id="userfirstname"
                        value={this.state.firstname}
                        placeholder="Your firstname"
                        onChange={this.onchange}
                    />
                </div>
                <div className={classnames('statustext bold size-20',{
                    'isvalid' : this.state.statustest
                })}>
                    status text
                </div>
            </div>
        )
    }
}

export default Careers;