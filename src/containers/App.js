import React, { Component } from 'react';

import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
// You HAVE to add this when you make constructors. It calls the super method of the component you're extending.
    super(props);
    console.log('[App.js] constructor');
    /*
    this.state = {
      persons: [
        {id: 'adsf', name: 'Zack', age: 26},
        {id: 'dssv', name: 'Jake', age: 24},
        {id: 'easc', name: 'Max', age: 22},
      ],
      otherState: 'some other value',
      showPersons: false,
    }
    */
  }
// Initializing state like this is a more modern way of the above method. This creates a constructor, calls super, and sets up state.
  state = {
    persons: [
      {id: 'adsf', name: 'Zack', age: 26},
      {id: 'dssv', name: 'Jake', age: 24},
      {id: 'easc', name: 'Max', age: 22},
    ],
    otherState: 'some other value',
    showPersons: false,
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentWillMount() {
    console.log('[App.js] componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render(){
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons = {this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangeHandler}/>
      )
    }

    return (
    <div className={classes.App}>
      <Cockpit
        title = {this.props.appTitle}
        showPersons = {this.state.showPersons}
        persons = {this.state.persons}
        clicked = {this.togglePersonsHandler}/>
      {persons}
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
