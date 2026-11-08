import React from 'react';
import { NavLink } from 'react-router';
import './header.css';

export default function Header() {
  return (
    <header className="navbar-container">
      <div className="navbar-logo">
        <div className="logo-text">
          <span className="logo-top">ALEX</span>
          <span className="logo-bottom">CARTER</span>
        </div>
      </div>
      <nav className="navbar-links">
        <NavLink 
          to="/" 
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          end
        >
          {({ isActive }) => (
            <>
              Home
              {isActive && <span className="active-indicator" />}
            </>
          )}
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          {({ isActive }) => (
            <>
              About
              {isActive && <span className="active-indicator" />}
            </>
          )}
        </NavLink>
        <NavLink 
          to="/service" 
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          {({ isActive }) => (
            <>
              Service
              {isActive && <span className="active-indicator" />}
            </>
          )}
        </NavLink>
        <NavLink 
          to="/project" 
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          {({ isActive }) => (
            <>
              Project
              {isActive && <span className="active-indicator" />}
            </>
          )}
        </NavLink>
        <NavLink 
          to="/article" 
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          {({ isActive }) => (
            <>
              Article
              {isActive && <span className="active-indicator" />}
            </>
          )}
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          {({ isActive }) => (
            <>
              Contact
              {isActive && <span className="active-indicator" />}
            </>
          )}
        </NavLink>
      </nav>
      <div className="navbar-action">
        <button className="hire-me-btn">Hire Me</button>
      </div>
    </header>
  );
}