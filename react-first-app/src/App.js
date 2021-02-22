import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';


// function App() {
//   return (
//     <div className="App">
//       <h1>I am a react app</h1>
//     </div>
//   );
// }

class App extends Component{
    render(){
        return (
            <div className="App">
            <h1>I am a new react app</h1>
            <Person name="Vis" age="36"></Person>
            <Person name="Dhanz" age="35">My hobbies: Racing</Person>
            <Person name="Asher" age="3"></Person>
            </div>
        );
    }
}

export default App;
