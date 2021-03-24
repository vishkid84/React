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
            {id:'v1',  name: 'Vis', age: 36},
            {id:'v2', name: 'Dhanz', age: 35},
            {id:'v3',  name: 'Asher', age: 3}
        ],
        showPersons: false
    }

   
    nameChangedHandler = (event, id) => {

        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        })

        // we get a copy of the 'object person' we clicked {id, name, age} from 'this.state' on top
        const personCopy = {...this.state.persons[personIndex]};

        // we only change the name of ther personCopy
        personCopy.name = event.target.value;

        // We copy persons into a new using ... spread operator
        const personsCopy = [...this.state.persons];
        // we change personCopy in our new array personsCopy
        personsCopy[personIndex] = personCopy;

        // we update our state persons to be replaced by our new copy personsCopy
        this.setState({persons: personsCopy})
    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    deletePersonHander = (personIndex) => {
        // const persons = this.state.persons.slice(); or the below line method using ... operator to set into a new array
        const newPersons = [...this.state.persons];
        newPersons.splice(personIndex, 1);
        this.setState({persons: newPersons});
    }

    render(){

        const style = {
            background: 'green',
            border: '1px solid white',
            color: 'white',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                background: 'lightgreen',
                color: 'black'
            }
        }

        let persons = null;

        if(this.state.showPersons){
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person 
                            click = { () => this.deletePersonHander(index)}
                            name = {person.name}
                            age = {person.age}
                            key = {person.id} 
                            changed = {(event) => this.nameChangedHandler(event, person.id)} />
                    })}
                </div>
            )
            style.background = 'red';
            style[':hover'] = {
                background: 'lightred',
                color: 'black'
            }
        }

        let classes = []

        if(this.state.persons.length <= 2){
            classes.push('red', 'bold');
        }else{
            classes.push('green', 'bold')
        }

        return (
            <div className="App">
                <h1>I am a new react app</h1>
                <p className={classes.join(' ')}>Click the button below to see the {this.state.persons.length} items </p>
                <button style={style} onClick={this.togglePersonHandler}>Toggle persons</button>
                {persons} 
            </div>
        );
    }
}

export default App;

// Without state, hard coded would be like below
/*      <Person name="Vis" age="36"></Person>
        <Person name="Dhanz" age="35">My hobbies: Racing</Person>
        <Person name="Asher" age="3"></Person> */

// Without dynamically outputting list by mapping, hard coded would be like below
// <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler.bind(this, 'Vishal Raju')}></Person>
// <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangedHandler}>My hobbies: Racing</Person>
// <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>


//  switchNameHandler = (newName) => {
//         // alert('Working')
//         // DO NOT DO THIS: this.state.persons[0].name = 'Vishal';
//         this.setState({
//             persons: [
//                 {name: newName, age: 36},
//                 {name: 'Dhanz', age: 35},
//                 {name: 'Asher', age: 3.5}
//             ]
//         })
//     }
