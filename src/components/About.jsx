import React from 'react';
import logo from '../assets/logo.png';
import backgroundImage from '../assets/background-about.jpg';
import './About.css';

const About = () => {
  return (
    <main className="about" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="about-overlay">
        <div className="about-card">
          <div className="about-header">
            <img src={logo} alt="Sweet Sage Studio" className="about-logo" />
            <h1>About Sweet Sage Studio</h1>
          </div>
          <section className="about-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis, felis ac finibus interdum, orci nisi dapibus libero, nec ultrices ex nisl at magna. Fusce euismod velit nec interdum fermentum. Aenean sagittis blandit eros. In nec nisi euismod, tincidunt magna vel, lacinia nunc. Nulla facilisi. Quisque vestibulum dolor nec elit pretium, in bibendum tortor aliquet. Integer sed dolor et leo tempor aliquet.</p>
            <p>Phasellus malesuada dolor non felis placerat, ac consectetur ligula vulputate. Donec et est bibendum, blandit purus ac, scelerisque urna. Aliquam erat volutpat. Integer vehicula gravida risus, ac egestas dolor luctus id. Mauris nec purus non arcu dictum tincidunt. Curabitur id bibendum magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras vitae dui et erat egestas fermentum.</p>
            <p>Nunc aliquet sagittis tortor, non scelerisque felis volutpat vel. Sed ut nunc ut metus placerat bibendum. Ut nec turpis at sapien posuere blandit. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer eget magna ex. Nulla facilisi. Proin ac fringilla nulla. Nulla suscipit nulla eu sem vehicula, at vehicula erat sagittis. Integer id magna vitae urna fermentum bibendum.</p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default About;
