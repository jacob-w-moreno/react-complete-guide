import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

// import Aux from '../../../hoc/Aux';
// import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';

class Person extends Component {
  componentDidMount(){
    this.lastInputRef.focus();
  }
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
          ref={(lastInput) => this.lastInputRef = lastInput}
          value={this.props.name}/>
      </Fragment>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default withClass(Person, classes.Person);
