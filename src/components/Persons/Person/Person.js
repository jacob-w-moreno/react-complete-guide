import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

// import Aux from '../../../hoc/Aux';
// import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
  constructor(props) {
    super(props);
    // this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount(){
    this.lastInputRef.focus();
    console.log('context:', this.context.authenticated);
  }

  render() {
    console.log('[Person.js] rendering...');

    return (
      // <Aux> can also be used here
      <Fragment>
          {this.context.authenticated
            ? <p>Context Authenticated!</p>
            : <p>Context Please Log In...</p>
          }
        <p onClick = {this.props.click}>
          I'm {this.props.name} and I'm {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type='text'
          onChange={this.props.changed}
          // ref = {inputEl => {this.inputEl = inputEl}}
          ref={(input) => this.lastInputRef = input}
          value={this.props.name}/>
      </Fragment>
      // </Aux>
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
