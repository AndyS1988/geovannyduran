import React from 'react';
import aboutPhoto from './about-photo-resized.jpg';
import instagram from './instagram.png';
import youtube from './youtube.png';
import gmail from './gmail.png'; 
import exit from './exit.png'; 
import './About.css';

const About = ({ condition, handleClick ,handleKeyPressForNavigation }) => {
  return (
    <div id="container" className={condition ? "showOrHide shown" : "showOrHide hidden"}>
        <div className="about-section">
            <img 
                className="exit" 
                src={exit} 
                alt="press to exit" 
                tabIndex={3}
                onClick={handleClick}
                onKeyPress={handleKeyPressForNavigation}
            />
        	<img className="gridImage" src={aboutPhoto} alt="portrait of Geovanny" />
        	<p className="gridText">I started my photography career in 2015. I have always enjoyed sports, so the photo + sports union 
                was inevitable. I have covered 1 season in First Division MX League and 2 seasons for the Female First Division MX League. 
                I am currently an independent photographer, with clients in advertising and publishing. I dedicate myself almost entirely to 
                the production of photographic content for soccer athletes. Feel free to reach out to me.
        	</p>
        	<div className="gridContact">
        		<a href="https://www.instagram.com/geovanny/?hl=en" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="instagram icon" className="contactIcon" />
                </a>
        		<a href="https://www.youtube.com/user/duranfamily43/videos" target="_blank" rel="noopener noreferrer">
                    <img src={youtube} alt="youtube icon" className="contactIcon" />
                </a>
        		<a href="mailto:geovannyaduran@gmail.com">
                    <img src={gmail} alt="gmail icon" className="contactIcon" />
                </a>
    		</div>
        </div>
    </div>
  );
}

export default About;