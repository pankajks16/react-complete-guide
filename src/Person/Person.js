import React from 'react';
import classes from './Person.module.css';

const person = (props) => {
  return (
		<div className={classes.Person}>
			<p onClick={props.click}>Hi ! I'm { props.name } and my age is: { props.age } </p>
			<input type="text" onChange={props.clicked} value={ props.name } />
		</div>  
  );
};

export default person;