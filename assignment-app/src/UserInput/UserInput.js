import React from 'react';

const userInput = (props) => {
    const inputStyle = {
        outline: 'none',
        borderColor: '#cedfee',
        textShadow: 'none',
        padding: '5px',
        background: 'aliceblue'
    }
    return (
        <div className='UserInput'>
            <input style={inputStyle} type='text' onChange={props.change} value={props.hobby} />
        </div>
    )
}

export default userInput;