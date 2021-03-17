import React from 'react';

const charComponent = (props) => {

    const charStyle = {
            color: 'red',
            display: 'inline-block',
            padding: '16px',
            textAlign: 'center',
            margin: '16px',
            border: '1px solid black'
        }

    return (
        <div className="Char">
            <ul>
                {props.split.split('').map((char, index) => {
                return <li style={charStyle} key={index}>{char}</li>
                })}
            </ul>
        </div>
    )
}

export default charComponent;