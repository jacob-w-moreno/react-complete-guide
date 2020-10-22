import React, {PureComponent} from 'react';

import Person from './Person/Person';

// Extending PureComponent is the equivalent of implementing shouldComponentUpdate checking for every single prop in the component
class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }
  /*
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    if (nextProps.persons !== this.props.persons) {
      return true;
    }
    return false;
  }
  */

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message: 'Shapshot!'};
  }

// the above method saves info from before it updates. E.g. if the page is re-rendering and the user had already scrolled down a bit, you can capture where they were and pass it to the below method as the third argument.

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount')
  }

  render() {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, index) => {
      return ( <Person
        click={()=>this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(e)=> this.props.changed(e, person.id)}
      />);
    });
  }
};

export default Persons;
