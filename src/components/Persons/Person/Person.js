import React, {Component, Fragment} from 'react';

// import Aux from '../../../hoc/Aux';
// import classes from './Person.css';

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');

    return (
      // <Aux> can also be used here </Aux>
      <Fragment>
        <p onClick = {this.props.click}>
          I'm {this.props.name} and I'm {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type='text'
          onChange={this.props.changed}
          value={this.props.name}/>
      </Fragment>
    )
  }
}

export default Person;
