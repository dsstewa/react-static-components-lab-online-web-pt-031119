import React, { Component } from 'react';
import CatComponent from './CatComponent'
import EinsteinQuoteComponent from './EinsteinQuoteComponent.js'
import MouseComponent from './MouseComponent.js'

// <CatComponent/>	
// <MouseComponent/>

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
			    <CatComponent/>
				<EinsteinQuoteComponent />
				<MouseComponent/>
			</div>
		);
	}
}

export default App;
