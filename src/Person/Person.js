import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {
	const style = {
		'@media (min-width: 800px)' : {
			width: '450px',
			backgroundColor: '#ccffe6'
		}
	};

  return (
		<div onClick={props.click} className="Person" style={style}>
			<p>Hi ! I'm { props.name } and my age is: { props.age } </p>
			<input type="text" onChange={props.clicked} value={ props.name } />
		</div>  
  );
};

export default Radium(person);