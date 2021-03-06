import React, { PureComponent } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
//import WithClass from '../hoc/WithClasses';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxss';

class App extends PureComponent {
  constructor(props) {
    super(props);

    console.log('[App.js] ----- inside constructor() method', props);
    this.state = {
      persons: [
        { id: "abc1", name: "Pankaj", age: 26 },
        { id: "abc2", name: "Chandler", age: 37 },
        { id: "abc3", name: "Slattery", age: 31 }
      ],
      anotherState: "Some random value",
      showPersons: true,
      toggleClicked: 0
    };
  }

  componentDidMount() {
    console.log('[App.js] ----- inside componentDidMount() method');
  }

  componentWillMount() {
    console.log('[App.js] ----- inside componentWillMount() method');
  }


  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] ----> Inside the shouldComponentUpdate() method ', nextProps, nextState);
  //   //return nextProps.persons !== this.props.persons
  //   return nextState.persons !== this.state.persons || nextState.showPersons !== this.state.showPersons 
  //   //return true;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] ----> Inside the componentWillUpdate () method ', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] ----> Inside the componentDidUpdate () method ');
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

    this.setState({ persons: persons })

  };

  toggleNameHandler = () => {
    // alert("The event that happened is: " + e.type)
    //console.log(this.state);
    const show = this.state.showPersons;
    this.setState((prevState, props) => {
      return {
        showPersons: !show,
        toggleClicked: prevState.toggleClicked + 1
      };
    });
  };

  deletePersonHandler = (indexPerson, event) => {
    // const persons = this.state.person.slice();
    // alert(e.type);
    // alert(event.target.id + " " + event.target.innerHTML);
    const persons = [...this.state.persons];
    persons.splice(indexPerson, 1);
    this.setState({ persons: persons })
  };

  render() {
    console.log('[App.js] ----- inside render() method');
    let persons = null;

    if (this.state.showPersons) {
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
      <Aux>
        <button className={classes.button} onClick={() => { this.setState({ showPersons: true }) }}>Show Persons</button>
        <Cockpit
          persons={this.state.persons}
          toggler={this.toggleNameHandler}
          showPerson={this.state.showPersons}
        ></Cockpit>
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);