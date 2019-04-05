import React from 'react';
import classes from './Cockpit.module.css'

const cockpit = (props) => {
  let anotherClasses = [];
  let btnClass = '';
  let btnContent = null;
  console.log(props);
  
  if(props.showPerson === true) {
    btnContent = 'Hide Content';
  } else if (props.showPerson === false || props.showPerson === null || props.showPerson === undefined) {
    btnClass = classes.Green;
    btnContent = 'Show Content';
  }
  
  if(props.persons.length <= 2){
    anotherClasses.push(classes.red);
  }
  
  if(props.persons.length <= 1){
    anotherClasses.push(classes.bold);
  }

  if(props.persons.length === 0){
    anotherClasses.push(classes.green);
  }

  let msg = "";

  if(props.persons.length !== 0 ){
    msg = "This is a sample paragraph";
  } else {
    msg = "Empty content";
  }

  return (
      <div className={classes.Cockpit}>
          <h1>Hi, This is Jarvis !! Hello Sir</h1>
          <p className={anotherClasses.join(' ')}>{msg}</p>
          <button className={btnClass} onClick={props.toggler}>{btnContent}</button>
      </div>
      
  );
};

export default cockpit;