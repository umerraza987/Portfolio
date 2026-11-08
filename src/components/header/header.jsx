import React, { useState } from 'react';
import './header.css';

export default function AlexCarterNavbar() {
  const [activeItem, setActiveItem] = useState('Home');
  const navItems = ['Home', 'About', 'Service', 'Project', 'Article', 'Contact'];

  return (
    <header className="navbar-container">
      <div className="navbar-logo">
        <div className="logo-text">
          <span className="logo-top">ALEX</span>
          <span className="logo-bottom">CARTER</span>
        </div>
      </div>
      <nav className="navbar-links">
        {navItems.map((item) => (
          <button
            key={item}
            className={`nav-link ${activeItem === item ? 'active' : ''}`}
            onClick={() => setActiveItem(item)}
          >
            {item}
            {activeItem === item && <span className="active-indicator" />}
          </button>
        ))}
      </nav>
      <div className="navbar-action">
        <button className="hire-me-btn">Hire Me</button>
      </div>
    </header>
  );
}