import React, {Component} from 'react';

const Context = React.createContext();
/* const updateCountryName = ()=>{
    console.log("update country name");

}; */
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
                var {country} = this.state;
                console.log("before country ",country);
                country = country.map(item => ({id:item.id,name:item.name+"12"}));
                console.log("after country ",country);
                this.setState({
                    ...this.state,
                    country : country
                }); 
                console.log("last country ",this.state); 
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