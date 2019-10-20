import React, { Component } from 'react';
import { Helmet } from "react-helmet";
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
			<Helmet>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Geovanny Duran</title>
				<link rel="canonical" href="https://geovannyduran.com" />
			    <meta property="site_name" content="Geovanny Duran" />
			    <meta property="title" content="Geovanny Duran" />
			    <meta property="url" content="https://www.geovannyduran.com" />
			    <meta property="type" content="website" />
			    <meta property="description" content="I'm a photographer, living life to the fullest and taking photos of it. Sports photography, fashion photography, street photography, portraits. Sport photos soccer, basketball, car, car racing" />
			    <meta name="keywords" content="Geovanny Duran, photography, photographer, sports photographer, sport, basketball, soccer, cars, car racing, San Diego, LA, Los Angeles" />
			    <meta name="author" content="Andrea Spaska-Cox" />
            </Helmet>
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
