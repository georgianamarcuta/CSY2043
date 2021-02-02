import React from 'react';
import ReactDOM from 'react-dom';

/*this is how we build a component
class Student extends React.Component{
	render(){
		return <h2>I am a student</h2>;
	}
}
//this is how we build a function component
function Student(){
	return <h1> I am a students of type function</h1>;
}*/
//this is how we build a class component with a constructor
class Student extends React.Component{
	constructor(){
		super();
		this.state = {webDesign: "Dislike"}
	}
	render(){
		return <h2>I am a student who {this.state.webDesign} web design</h2>;
	}
}
ReactDOM.render(<Student />, document.getElementById('root'));
