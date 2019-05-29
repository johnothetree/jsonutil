import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { BrowserRouter as Router, Route } from "react-router-dom"
import './index.css'

const initialState = {
	json: '',
	response: ''
}

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = initialState;
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			json: event.target.value,
			response: this.state.response
		});
	}

	handleClick() {
		console.log('text was submitted: \n' + this.state.json);

		fetch("https://5ced460fb779120014b49fd3.mockapi.io/data", {
			method: 'post',
			body: this.state.json
		})
  		.then(res => res.json())
  		.then(
    		(result) => {
    			console.log('response get');
      			this.setState({
        			isLoaded: true,
			  		response: JSON.stringify(result, null, 2)
      			});
    		},
	        (error) => {
	        	console.log('error in api call');
	          	this.setState({
	            	isLoaded: true,
           	 		error
	          	});
	        }
		);
	}

	handleReset() {
		console.log('resetting json');
		this.setState(initialState);
	}


	render() {
		return (
			<Router basename='/jsonutil'>
				<Route render={() => (
						<div>
							<link
							  rel="stylesheet"
							  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
							  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
							  crossOrigin="anonymous"
							/>
							<Container className="mx-auto">
								<Row>
									<label>JSON Input</label>
								</Row>	
								<Row sm={8}>
									<textarea type="text" value={this.state.json} onChange={this.handleChange} placeholder="JSON here"/>
								</Row>
								<Row>
									<button type="submit" onClick={() => this.handleClick()}>Send JSON</button>
									<button type="submit" onClick={() => this.handleReset()}>Reset JSON</button>
								</Row>
								<Row>
									<label>API Output</label>
								</Row>
								<Row>
									<textarea type="text" value={this.state.response} placeholder="Output here" disabled/>
								</Row>
							</Container>
						</div>
					)}>
				</Route>
			</Router>
		);
  	}
}

// ========================================

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
