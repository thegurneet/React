import React, { useState } from 'react';
import Person from './Person/Person.js'
import './App.css';



const App = props => {

  const [personsState, setPersonsState] = useState({ 
    persons: [
      {id: 1, name : 'Max', age: 28}, 
      {id: 2, name : 'Manu', age: 29},
      {id: 3, name : 'Gurneet', age: 24}
    ], 
    showPersons: true
  });

  const[otherState, setOtherState] = useState( 'someother Value'); 
  console.log(personsState , otherState)


  //Switch the name function. 
  const switchNameHandler = (newName) =>{
    console.log('switchNameHandler clicked'); 
   // NO PLS this.state.persons[0].name = 'Maximum';
   setPersonsState({
    persons: [
      {id: 1, name : newName, age: 28}, 
      {id: 2, name : 'Manu', age: 29},
      {id: 3, name : 'Gurneet', age: 24}
    ]
   })
  }


  const nameChangedHandler = (event, id) =>{
    const personIndex = personsState.persons.findIndex(p => { 
      return p.id === id; 
    })

    const person = {
      ...personsState.persons[personIndex]
    }
    
    person.name = event.target.value;
    const persons = [...personsState.persons];
    persons[personIndex] = person

    const showMe = personsState.showPersons

    setPersonsState({ persons: persons, showPersons: showMe})
  }

  const deletePersonHandler = (personIndex) =>{
    const persons = [...personsState.persons];
    const showPersons = personsState.showPersons;
    persons.splice(personIndex,1);
    setPersonsState({persons: persons, showPersons : showPersons})
    console.log(personIndex);
  }

  const togglePersonsHandler = (event) => { 
    const doesShow = personsState.showPersons; 
    const currentPersons = personsState.persons;
    setPersonsState({persons: currentPersons, showPersons: !doesShow})
  }

  let persons = null;

  if(personsState.showPersons){
    persons = ( 
      <div>
        {personsState.persons.map((person,index) => { 
          return <Person
           click={ ()=> deletePersonHandler(index)}
           name={person.name} 
           age={person.age}
           key={person.id}
           changeMe={ (event) => nameChangedHandler(event, person.id)}
            />
        })}
    </div> 
    );
  }

    return(
      <div className="App"> 
        <h1> Hi I'm a React App</h1>
        <button onClick={togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    )};


export default App;




