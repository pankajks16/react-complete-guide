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