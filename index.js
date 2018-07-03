import './style';
import { Component } from 'preact';

export default class App extends Component {
	render() {
		var x = 10*10; 
		var y = "microsoft interns";

		return (
			<div>
				<h1>Hello, Nice World!</h1>
				{x}
				<br/>
				{new Date(Date.now()).toDateString()}
				<br/>
				{new Date(Date.now()).toString()}
				<br/>
				{new Date().toDateString()}
				{y}
			</div>
		);
	}
}
