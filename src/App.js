import React, { Component } from 'react';
import classes from './App.module.css';
import Person from './Person/Person';

class App extends Component {

state = {
  persons: [
    { id: "abc1", name: "Pankaj", age: 26 },
    { id: "abc2", name: "Chandler", age: 37 },
    { id: "abc3", name: "Slattery", age: 31 }
  ],
  anotherState: "Some random value",
  showPersons: true 
};

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
    let persons = null;
    let btnContent = null;
    let btnClass = '';

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map(
            (person, index) => {
              return <Person
                name={person.name}
                age={person.age}
                click={this.deletePersonHandler.bind(this, index)}
                key={person.id}
                clicked={this.nameChangeHandler.bind(this, person.id)}
              />
            }
          )}
        </div>
      )
      btnContent = "Hide Content";
    } else {
      btnContent = "Show Content";
      btnClass = classes.Green;
    }
    
    let anotherClasses = [];
    
    if(this.state.persons.length <= 2){
      anotherClasses.push(classes.red);
    }
    
    if( this.state.persons.length <= 1){
      anotherClasses.push(classes.bold);
    }

    if( this.state.persons.length === 0){
      anotherClasses.push(classes.green);
    }

    let msg = "";

    if(this.state.persons.length !== 0 ){
      msg = "This is a sample paragraph";
    } else {
      msg = "Empty content";
    }

    return (
        <div className={classes.App}>
          <h1>Hi, This is Jarvis !! Hello Sir</h1>
          <p className={anotherClasses.join(' ')}>{msg}</p>
          <button className={btnClass} onClick={this.toggleNameHandler}>{btnContent}</button>
          {persons}
        </div>
    );
  }
}

export default App;