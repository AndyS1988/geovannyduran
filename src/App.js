import React, { Component } from 'react';
import Welcome from './Components/Welcome/Welcome'; 
import Navigation from './Components/Navigation/Navigation'; 
import GioGallery from './Components/GioGallery/GioGallery'; 
import About from './Components/AboutAndContact/About';

import './App.css';

const initialState = {
	route: "welcome",
	condition: false
}

class App extends Component {
	constructor(props) {
		super(props);
		this.state = initialState;
	}

	onRouteChange = (route) => {
		if (route === "welcome") {
			this.setState(initialState);
		} else if (route === "main") {
			this.setState({route: "main"})
		}
	}

	handleKeyPressForWelcome = (event) => {
  		if(event.key === 'Enter'){
    		this.onRouteChange("main");
  		}
	}

	handleKeyPressForNavigation = (event) => {
  		if(event.key === 'Enter'){
    		this.handleClick();
  		}
	}

	handleClick = () => {
		this.setState({
			condition: !this.state.condition
		})
	}

	render() {
		const { route, condition } = this.state;
		return (
			<div className="App">
			{ route === "main" ? (
				<main>
					<Navigation 
						condition={condition} 
						handleClick={this.handleClick}
						handleKeyPressForNavigation={this.handleKeyPressForNavigation}
					/>
					<GioGallery id="gallery"/>
					<About 
						condition={condition}
						handleClick={this.handleClick}
						handleKeyPressForNavigation={this.handleKeyPressForNavigation}
					/>
				</main>
				): <Welcome 
						onRouteChange={this.onRouteChange} 
						handleKeyPressForWelcome={this.handleKeyPressForWelcome}
					/>
			}				
			</div>
   		);
  	}
}

export default App;
