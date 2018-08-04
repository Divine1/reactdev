import React , { Component } from 'react';
import {Consumer} from '../context/context';

class Sports extends Component{

    render(){

        return (
            <Consumer>
                {
                    value => {
                        return(
                            <div>
                                <h3>Sports</h3>
                                <div>
                                    {
                                        value.country.map(item => <div key={item.id}>{item.id} -- {item.name}</div>)
                                    }
                                </div>
                                {/* <div className="button" onClick={value.updateCountryName.bind(this,"id12")}>Sports Click</div> */}
                                <div className="button" onClick={value.updateCountryName.bind(this,"id12")}>Sports Click</div>
                            </div>
                        )
                    }
                }
            </Consumer>
        );
    }

}

export default Sports;