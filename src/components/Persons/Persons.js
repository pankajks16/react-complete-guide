import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log('[Persons.js] -----> Inside the constructor() method', props);
  }

  componentDidMount() {
    console.log('[Persons.js] -----> Inside the componentDidMount() method');
  }

  componentWillMount() {
    console.log('[Persons.js] -----> Inside the componentWillMount() method');
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons.js] ----> Inside the componentWillReceiveProps() method ', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] ----> Inside the shouldComponentUpdate() method ', nextProps, nextState);
    return nextProps.persons !== this.props.persons || nextProps.clicked !== this.props.clicked 
          || nextProps.changed !== this.props.changed;
    //return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] ----> Inside the componentWillUpdate () method ', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE Persons.js] ----> Inside the componentDidUpdate () method ');
  }

  render() {
    console.log('[Persons.js] -----> Inside the render() method');
    return this.props.persons.map(
      (person, index) => {
        return <Person
          name={person.name}
          age={person.age}
          click={this.props.clicked.bind(this, index)}
          key={person.id}
          clicked={this.props.changed.bind(this, person.id)}
        />
      }
    )
  }
}

export default Persons;