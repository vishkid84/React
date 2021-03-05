import React, {Component} from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component{

    state = {
        userOutputs: [
            {name: 'Vishal', hobby: 'watching movies'},
            {name: 'Dhanya', hobby: 'gardening'}
        ]
    }

    switchHobbyHandler = (newHobby) => {
        this.setState({
            userOutputs: [
                {name: 'Vishal', hobby: newHobby},
                {name: 'Dhanya', hobby: 'learning ukelele'}
            ]
        })
    }

    hobbyChangedHandler = (event) => {
        this.setState({
            userOutputs: [
                {name: 'Vishal', hobby: event.target.value},
                {name: 'Dhanya', hobby: 'gardening'}
            ]
        })
    }

    render(){

        return (
            <div className='App'>
                <h1>New assignment app</h1>
                <button onClick={this.switchHobbyHandler.bind(this, 'learning React')}>Click for another hobby</button>
                <UserOutput name={this.state.userOutputs[0].name} hobby={this.state.userOutputs[0].hobby} >Vishal's paragraph</UserOutput>
                <UserInput change={this.hobbyChangedHandler} hobby={this.state.userOutputs[0].hobby}></UserInput>
                <hr></hr>
                <UserOutput name={this.state.userOutputs[1].name} hobby={this.state.userOutputs[1].hobby} >Dhanya's paragraph</UserOutput>
                <UserInput change={this.hobbyChangedHandler} hobby={this.state.userOutputs[1].hobby}></UserInput>
            </div>
        )
    }
}

export default App;
