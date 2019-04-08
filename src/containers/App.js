import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props){
    super(props);

    console.log('[App.js] ----- inside constructor() method', props);
    this.state = {
      persons: [
        { id: "abc1", name: "Pankaj", age: 26 },
        { id: "abc2", name: "Chandler", age: 37 },
        { id: "abc3", name: "Slattery", age: 31 }
      ],
      anotherState: "Some random value",
      showPersons: true 
    };  
  }

  componentDidMount() {
    console.log('[App.js] ----- inside componentDidMount() method');
  }

  componentWillMount() {
    console.log('[App.js] ----- inside componentWillMount() method');
  }

  
  
  nameChangeHandler = (id, event) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id
    });
    
    var person = {
      ...this.state.persons[personIndex]
    };

    // alert(JSON.stringify(person));

    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState({persons: persons})

  };

  toggleNameHandler = () => {
    // alert("The event that happened is: " + e.type)
    //console.log(this.state);
    const show = this.state.showPersons;
    this.setState({ showPersons: !show})
  };

  deletePersonHandler = (indexPerson, event) => {
    // const persons = this.state.person.slice();
    //  alert(e.type);
    // alert(event.target.id + " " + event.target.innerHTML);
    const persons = [...this.state.persons];
    persons.splice(indexPerson, 1);
    this.setState({persons: persons})
  };

  render() {
    console.log('[App.js] ----- inside render() method');
    let persons = null;

    if(this.state.showPersons){
      persons = (
      <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler}
      >
      </Persons>
      )
    } 
    
    return (
      <div className={classes.App}>
        <Cockpit
          persons = {this.state.persons}
          toggler = {this.toggleNameHandler}
          showPerson = {this.state.showPersons}
        ></Cockpit>
        {persons}
      </div>
    );
  }
}

export default App;