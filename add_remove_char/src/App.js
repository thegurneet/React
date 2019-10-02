import React, { Component } from 'react';
import './App.css';
import Validation from './ValidationComponent/validationComponent';
import Char from './Char/char';



class App extends Component {

 state = { 
   userInput: ''
 }

  inputChangedHandler = (event) => { 
    this.setState({userInput: event.target.value})
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index,1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
  }

  render(){
    
    const charList = this.state.userInput.split('').map( (letter,index)=>{
      return <Char 
      character={letter} 
      key={index}
      clicked={()=> this.deleteCharHandler(index)}
      >
      </Char>
    })
    


    return(
      <div className="App">
      <hr />
   
         <input type="text" onChange={this.inputChangedHandler} 
         value={this.state.userInput} ></input>

         <p> {this.state.userInput}</p>

         <Validation inputLength={this.state.userInput.length}></Validation>
          {charList}
        </div>
     );
  }



}




export default App;
