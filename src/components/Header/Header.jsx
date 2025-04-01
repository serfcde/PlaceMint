import React from 'react';
import './Header.css';
import logo from '../../assets/logo.jpeg';
const Header = ({ toggleLoginModal, isLoginModalOpen }) => {
  return (
    <header className={`header ${isLoginModalOpen ? 'blur' : ''}`}>
      <div className="logo">
        <img src={logo} alt="PlaceMint Logo" />
        <span>PlaceMint</span>
      </div>
      <button 
        className="login-button" 
        onClick={toggleLoginModal}
        aria-label="Open login modal"
      >
        Login
      </button>
    </header>
  );
};

export default Header;
