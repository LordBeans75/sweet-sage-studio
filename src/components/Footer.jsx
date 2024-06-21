import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-media">
          <a href="https://www.facebook.com/SweetSageStudio" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Sweet Sage Studio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
