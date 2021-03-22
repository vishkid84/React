import React from 'react';

const validationComponent = (props) => {

    const min = 5;
    let textMsg = "Text too short";

    if(props.textLength > min){
        textMsg = "Text long enough";
    }

    return (
        <div className="Validation">
            <p> Text length: {props.textLength} </p>
            {/* <p> {props.textLength <= min ? 'Text too short' : 'Text long enough'} </p> */}
            <p> {textMsg} </p>
        </div>
    )
}

export default validationComponent;