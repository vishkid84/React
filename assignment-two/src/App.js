import React, {Component} from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component{
    state = {
        userInput: 'Vishal'
    }

    changedInput = (event) => {
        this.setState({userInput: event.target.value})
    }

    render(){

        return (
            <div className="App">
                <h1>I am a new react app</h1>
                <input type='text' onChange={this.changedInput} value={this.state.userInput}></input>
                <p > {this.state.userInput} </p>
                <Validation textLength={this.state.userInput.length}></Validation>
                <Char split={this.state.userInput}></Char>
            </div>
        );
    }
}

export default App;
