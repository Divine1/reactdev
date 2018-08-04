import React, {Component} from 'react';

const Context = React.createContext();
const updateCountryName = ()=>{
    console.log("update country name");

};
class ProviderComponent extends Component{
    constructor(){
        super();
        console.log("in constructor Provider");
        this.state = {
            country:[
                {
                    id:1,
                    name:"India"
                },
                {
                    id:2,
                    name:"Japan"
                },
                {
                    id:3,
                    name:"China"
                },
                {
                    id:4,
                    name:"Russia"
                }
            ],
            updateCountryName : (id) =>{
                console.log("in updateCountryName arrow ",id);
                this.setState({
                    
                })
            }
        }
    }

    render(){

        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Provider = ProviderComponent;
export const Consumer = Context.Consumer;