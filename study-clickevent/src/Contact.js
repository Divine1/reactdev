import React,{Component} from 'react';

class Contact extends Component{
    constructor(){
        super();
        console.log("in constructor Contact");
    }

    render(){
        const {updateUser} = this.props;
        return(
            <div>
                <h3>Contact</h3>
                <div>
                    <div className="button" onClick={updateUser}>Contact Button</div>
                </div>
            </div>
        )
    }
}

export default Contact;