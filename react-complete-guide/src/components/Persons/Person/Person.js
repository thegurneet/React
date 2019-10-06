import React from 'react';
import './Person.css';

// Creating a person Object that returns html with dynamic info. 

const person = (props)=>{

    const style = { 
        backgroundColor: 'white',
        font: 'inherit', 
        border: '1px solid blue',
        padding: '6px', 
        corsor : 'pointer'
    };

    return (
        <div className="Person">
            <h2> I am {props.name} and i am {props.age} years old</h2>
            <p> {props.children}</p>
            <button style={style} onClick={props.click} >Delete</button>
            <input type="text" onChange={props.changeMe} value={props.name} />
        </div>
    )
}

export default person;