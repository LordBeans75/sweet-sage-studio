import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Ensure you have the logo image in the assets folder
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo-container">
          <img src={logo} alt="Sweet Sage Studio" className="logo" />
        </div>
        <div className="title-container">
          <h1 className="header-title">Sweet Sage Studio</h1>
        </div>
        <nav>
          <ul className="nav-list">
            <li className="nav-item"><Link to="/" className="nav-link">Schedule</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
            <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
