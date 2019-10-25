import React, { Component } from 'react';

class AddNinja extends Component { 

    state = {
        name: null,
        age: null,
        belt:null
    }

    handlerChange = (event) => {
        this.setState({
            [event.target.id] : event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault(); //method cancels the event if it is cancelable
        this.props.addNinja(this.state)
    }

    render() { 
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name"> Name : </label>
                        <input type="text" id="name" onChange={this.handlerChange}></input>
                    <label htmlFor="name"> Age : </label>
                        <input type="text" id="age" onChange={this.handlerChange}></input>
                    <label htmlFor="name"> Belt : </label>
                        <input type="text" id="belt" onChange={this.handlerChange}></input>
                    <button>Submit</button>
                </form>
            </div> 
        )
    }
}

export default AddNinja;