import React from 'react';
import './Welcome.css'; 

const Welcome = ({ handleKeyPressForWelcome, onRouteChange }) => {
    return (
        <div className="Welcome">
        	<header>
        		<h1 className="header-text">GEOVANNY DURAN</h1>
        		<p className="header-text bold-text">PHOTOGRAPHY</p> 
        	</header>
        	<div className="buttons">
        		<a 
                    onClick={() => onRouteChange("main")}
                    onKeyPress={handleKeyPressForWelcome} 
                    className="welcome-button bold-text" 
                    tabIndex={1}>GALLERY
                </a>
        		<a href="mailto:geovannyaduran@gmail.com" className="welcome-button bold-text"tabIndex={2}>CONTACT</a>
        	</div>	
        </div>
  );
}

export default Welcome;