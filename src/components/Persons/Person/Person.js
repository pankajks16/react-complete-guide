import React, { Component } from 'react';
import classes from './Person.module.css';
// import WithClass from '../../../hoc/WithClasses';
import Aux from '../../../hoc/Auxss';
import withClass from '../../../hoc/withClass';

class Person extends Component {
	constructor(props) {
    super(props);
    console.log('[Person.js] -----> Inside the constructor() method', props);
  }

  componentDidMount() {
    console.log('[Person.js] -----> Inside the componentDidMount() method');
  }

  componentWillMount() {
    console.log('[Person.js] -----> Inside the componentWillMount() method');
	}
	
	render(){
		console.log('[Person.js] -----> Inside the render() method');
		return (
			<Aux>
				<p onClick={this.props.click}>Hi ! I'm { this.props.name } and my age is: { this.props.age } </p>
				<input type="text" onChange={this.props.clicked} value={ this.props.name } />
			</Aux> 
		)
	}
}

export default withClass(Person, classes.Person);