import React from 'react';
import PropTypes from 'prop-types';

const FormElements = (props) =>{
    let labelElement = null;
    let inputElement = null;
    let buttonElement = null;
    switch(props.type){
        case "text":
            labelElement = <label htmlFor={props.id}>{props.label}</label>
            inputElement = <input 
                type={props.type} 
                name={props.name} 
                id={props.id}
                value={props.value}
                placeholder={props.placeholder} 
                onChange={props.onChange}/>
        break;
        case "button":
            buttonElement = <button onClick={props.submitData}>{props.label}</button>
        break;
        default:

    }
    return (
        <div>{labelElement}{inputElement}{buttonElement}</div>
    )
}
FormElements.propTypes={
    type: PropTypes.string.isRequired
};
export default FormElements;