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

    deleteText = (index) => {
        const text = this.state.userInput.split('');
        text.splice(index, 1);
        const updatedText = text.join('');
        this.setState({userInput: updatedText})
    }

    render(){

        const characterList = this.state.userInput.split('').map((char, index) => {
                return <Char clicked ={ () => this.deleteText(index)} character={char} key={index}></Char>
                })

        return (
            <div className="App">
                <h1>I am a new react app</h1>
                <input type='text' onChange={this.changedInput} value={this.state.userInput}></input>
                <p > {this.state.userInput} </p>
                <Validation textLength={this.state.userInput.length}></Validation>
                {characterList}
            </div>
        );
    }
}

export default App;
