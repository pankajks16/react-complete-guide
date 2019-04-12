import React from 'react';
import classes from './Cockpit.module.css';
import Aux from '../../hoc/Auxss';

const cockpit = (props) => {
  let anotherClasses = [];
  let btnClass = classes.Button;
  let btnContent = null;
  //console.log(props);

  if (props.showPerson === true) {
    btnContent = 'Hide Content';
  } else if (props.showPerson === false || props.showPerson === null || props.showPerson === undefined) {
    btnClass = [classes.Button, classes.Green].join(' ');
    btnContent = 'Show Content';
  }

  if (props.persons.length <= 2) {
    anotherClasses.push(classes.red);
  }

  if (props.persons.length <= 1) {
    anotherClasses.push(classes.bold);
  }

  if (props.persons.length === 0) {
    anotherClasses.push(classes.green);
  }

  let msg = "";

  if (props.persons.length !== 0) {
    msg = "This is a sample paragraph";
  } else {
    msg = "Empty content";
  }

  return (
    <Aux>
        <h1>Hi, This is Jarvis !! Hello Sir</h1>
        <p className={anotherClasses.join(' ')}>{msg}</p>
        <button className={btnClass} onClick={props.toggler}>{btnContent}</button>
    </Aux>
  );
};

export default cockpit;