import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

// ----Method 1------

// function App() {
//   return (
//     <div className="App">
//       <h1>I am a react app</h1>
//     </div>
//   );
// }

// ----Method 2------
// const App = () =>{
//     return (
//             <div className="App">
//             <h1>I am a new react app</h1>
//             <Person name="Vis" age="36"></Person>
//             <Person name="Dhanz" age="35">My hobbies: Racing</Person>
//             <Person name="Asher" age="3"></Person>
//             </div>
//         );
// }

// ----Method 3------
class App extends Component{
    state = {
        persons: [
            {name: 'Vis', age: 36},
            {name: 'Dhanz', age: 35},
            {name: 'Asher', age: 3}
        ]
    }

    switchNameHandler = (newName) => {
        // alert('Working')
        // DO NOT DO THIS: this.state.persons[0].name = 'Vishal';
        this.setState({
            persons: [
                {name: newName, age: 36},
                {name: 'Dhanz', age: 35},
                {name: 'Asher', age: 3.5}
            ]
        })
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Vis', age: 36},
                {name: event.target.value, age: 35},
                {name: 'Asher', age: 3}
            ]
        })
    }

    render(){

        const style = {
            backgroundColor: 'white',
            border: '1px solid blue',
            color: 'blue',
            padding: '8px'
        }

        return (
            <div className="App">
            <h1>I am a new react app</h1>
            <button style={style} onClick={() => this.switchNameHandler('Vishal')}>Switch name</button>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler.bind(this, 'Vishal Raju')}></Person>
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangedHandler}>My hobbies: Racing</Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
            </div>
        );
    }
}

export default App;

// Without state, hard coded would be like below
/*      <Person name="Vis" age="36"></Person>
        <Person name="Dhanz" age="35">My hobbies: Racing</Person>
        <Person name="Asher" age="3"></Person> */