import React from 'react'

const userOutput = (props) => {
    return (
        <div className='UserOutput'>
            <h4>{props.children}</h4>
            <p>{props.name} spends time {props.hobby}.</p>
            <hr></hr>
        </div>
    )
}

export default userOutput;