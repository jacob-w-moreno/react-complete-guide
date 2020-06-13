import React, { Component } from 'react';
import './App.css';
import './Person/Person.css';
import Person from './Person/Person';

class App extends Component {

state = {
  persons: [
    {name: 'Zack', age: 26},
    {name: 'Jake', age: 24},
    {name: 'Max', age: 22},
  ],
  otherState: 'some other value'
}

switchNameHandler = (newName) => {
  this.setState({
    persons: [
      {name: 'Zack', age: 26},
      {name: newName, age: 25},
      {name: 'Max', age: 22},
    ]
  })
}

nameChangeHandler = (event) => {
  this.setState({
    persons: [
      {name: 'Zack', age: 26},
      {name: event.target.value, age: 25},
      {name: 'Max', age: 22},
    ]
  })
}

  render(){

    const style = {
      backgroundColor: 'gray',
      font: 'inherit',
      border: '4px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
    <div className="App">
      <h1>Hi, I'm a React App!</h1>
      <p>This is really working!</p>
      <button 
        style={style}
        onClick={() => this.switchNameHandler('Big Bad Boi')}
        >Switch Name</button>
      <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
      <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Jacobbbbb')}
        changed={this.nameChangeHandler}>
        My hobbies: soccer
      </Person>
      <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
    </div>
  )
  }
  

  // The code below is the exact same as the code above. The bottom code is what the top code is compiled to.

  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'))
}

export default App;



/*
state = {
  persons: [
    {name: 'Zack', age: 26},
    {name: 'Jake', age: 24},
    {name: 'Max', age: 22},
  ],
  otherState: 'some other value'
}

switchNameHandler = () => {
  // console.log('this was clicked')
  // DON'T DO THIS: personsState.persons[1] = 'Jacob'
  this.setState({
    persons: [
      {name: 'Zack', age: 26},
      {name: 'Jacob', age: 24},
      {name: 'Max', age: 22},
    ]
  })
}
*/