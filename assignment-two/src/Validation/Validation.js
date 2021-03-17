import React from 'react';

const validationComponent = (props) => {

    const min = 5;

    return (
        <div className="Validation">
            <p> Text length: {props.textLength} </p>
            <p> {props.textLength <= min ? 'Text too short' : 'Text long enough'} </p>
        </div>
    )
}

export default validationComponent;