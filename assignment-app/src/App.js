import React, {Component} from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput'

class App extends Component{

    state = {
        userOutputs: [
            {name: 'Vishal', hobby: 'watching movies'},
            {name: 'Dhanya', hobby: 'gardening'}
        ]
    }

    switchHobbyHandler = () => {
        this.setState({
            userOutputs: [
                {name: 'Vishal', hobby: 'learning React'},
                {name: 'Dhanya', hobby: 'learning ukelele'}
            ]
        })
    }

    render(){

        return (
            <div className='App'>
                <h1>New assignment app</h1>
                <button onClick={this.switchHobbyHandler}>Click for another hobby</button>
                <UserOutput name={this.state.userOutputs[0].name} hobby={this.state.userOutputs[0].hobby} >Vishal's paragraph</UserOutput>
                <UserOutput name={this.state.userOutputs[1].name} hobby={this.state.userOutputs[1].hobby} >Dhanya's paragraph</UserOutput>
            </div>
        )
    }
}

export default App;
