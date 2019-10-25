import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component { 

  state = {
    ninjas : [
      { name: "Gurneet", age: 24, belt: "blue", id: 1},
      { name: "Ryan", age: 32, belt: "black", id: 2},
      { name: "Yoshi", age: 12, belt: "yellow", id: 3}
    ]
  }

  addNinja = (newNinja) => {
    newNinja.id = Math.random(); 
    let oldNinjas = [...this.state.ninjas, newNinja];
    this.setState({
      ninjas : oldNinjas
    })
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id;
    })

    this.setState({
      ninjas: ninjas
    })
  }


  render(){
    return (
      <div className="App">
        <h1>My first page</h1>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
        <AddNinja addNinja = {this.addNinja}/>
      </div>
      
    )
  }
}


export default App;
