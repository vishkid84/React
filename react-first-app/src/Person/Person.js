import React from 'react';
// import Radium from 'radium';
import styled from 'styled-components'
// import './Person.css'

const StyledDiv = styled.div`
    width: 60%;
    margin: 15px auto;
    padding: 16px;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    text-align: center;

    @media (min-width: 500px) {
        width: 450px;
    }
`;

const person = (props) => {
    
    return (
        // <div className='Person' style ={style} >
        <StyledDiv>
            <h4 onClick={props.click}>My name is {props.name} and I am {props.age} years old.</h4>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name} />
        </StyledDiv>
    )
}

export default person;