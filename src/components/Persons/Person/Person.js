import React, { Component } from 'react';
import classes from './Person.module.css';
// import WithClass from '../../../hoc/WithClasses';
import Aux from '../../../hoc/Auxss';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';

class Person extends Component {
	constructor(props) {
		super(props);
		console.log('[Person.js] -----> Inside the constructor() method', props);
	}

	componentDidMount() {
		console.log('[Person.js] -----> Inside the componentDidMount() method');
		if (this.props.position === 0) {
			this.myProperty.focus();
		}
	}

	componentWillMount() {
		console.log('[Person.js] -----> Inside the componentWillMount() method');
	}

	render() {
		console.log('[Person.js] -----> Inside the render() method');
		return (
			<Aux>
				<p onClick={this.props.click}>Hi ! I'm {this.props.name} and my age is: {this.props.age} </p>
				<input
					ref={(inp) => { this.myProperty = inp }}
					type="text"
					onChange={this.props.clicked}
					value={this.props.name} />
			</Aux>
		)
	}
}

Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	clicked: PropTypes.func
}

export default withClass(Person, classes.Person);