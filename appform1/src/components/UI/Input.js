import React from 'react';
import './Input.css';

const input = (props) =>{
    let inputElement = null;

    switch(props.inputtype){
        case("input"):
            inputElement = <input {...props} className="InputElement"/>
        break;
        case("textarea"):
            inputElement = <textarea {...props} />
        break;

        
    }
    return (
        <div className="Input">
            <label className="Label">{props.label}</label>
            {inputElement}
        </div>
    );
};

export default input;