import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import PropTypes from 'prop-types';

import Aux from '../hoc/Aux';

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
      {id: 'adsf', name: 'Zack', age: 27},
      {id: 'dssv', name: 'Jake', age: 25},
      {id: 'easc', name: 'Max', age: 23},
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

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

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    });
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
    <Aux>
      <button onClick={()=>this.setState({showCockpit: this.state.showCockpit ? false: true})}>Remove Cockpit</button>
      {this.state.showCockpit
      ? <Cockpit
        title = {this.props.appTitle}
        showPersons = {this.state.showPersons}
        personsLength = {this.state.persons.length}
        clicked = {this.togglePersonsHandler}/>
      : null}

      {persons}
    </Aux>
  )
  }


  // The code below is the exact same as the code above. The bottom code is what the top code is compiled to.

  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'))
}

App.propTypes = {
  appTitle: PropTypes.string
}

export default withClass(App, classes.App);
