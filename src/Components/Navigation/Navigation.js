import React from 'react';
import logo from './Geovanni-logo.png';
import './Navigation.css'; 

const Navigation = ({ condition, handleClick, handleKeyPressForNavigation }) => {
  return (
    <header className="navigation">
        <nav className="navigation-bar">
            <div className="navigation-logo">
                <a href="/" tabIndex={1}><img src={logo} alt="logo" height="100%" width="auto"/></a>
            </div>
            <div className="spacer" />
            <div className="navigation-items">
                <ul>
                    <li><p 
                        tabIndex={2}
                        onClick={() => handleClick()}
                        onKeyPress={handleKeyPressForNavigation}
                        >{condition ? "HIDE " : "SHOW "}CONTACT</p>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  );
}

export default Navigation;