import React from 'react';

const person = (props) => {
    return (
        <div>
            <h4 onClick={props.click}>My name is {props.name} and I am {props.age} years old.</h4>
            <p>{props.children}</p>
        </div>
    )
}

export default person;