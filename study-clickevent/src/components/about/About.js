import React from 'react';

const About = (props) =>{
    const propsString = JSON.stringify(props);

    const redirect = ()=>{
        props.history.push("/");
    };

    return (
        <div>
            <h3>About</h3>
            <div>
                {propsString}
                <button onClick={redirect}> Click</button>
            </div>
        </div>
    )
}

export default About;