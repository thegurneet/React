import React from 'react';
import classes from './Cockpit.css';


const cockpit = (props) => { 

    const assignedClasses = [];
    let btnClass = '';

    if(props.showPerson) { 
        btnClass = classes.Red
    }
    if(props.persons.length <= 2) { 
      assignedClasses.push('red')
    };
    if(props.persons.length <=1) {
     assignedClasses.push('bold');
    }

    return (
        <div className={classes.Cockpit}> 
         <h1> Hi I'm a React App</h1>
        <p > This is really working</p>
        <button 
          onClick={props.togglePerson}>Toggle Persons</button>
        </div>
    );
}

export default cockpit