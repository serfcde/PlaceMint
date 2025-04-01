import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginModal.css';

const LoginModal = ({ toggleLoginModal, toggleSignupModal, isOpen, onLoginSuccess }) => {
  // console.log('onLoginSuccess prop value:', onLoginSuccess); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleClose = useCallback(() => {
    toggleLoginModal();
    navigate('/');
  }, [toggleLoginModal, navigate]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, handleClose]);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert('Please enter both username and password.');
      return;
    }

    console.log('Login with:', username, password);
    console.log("this is caled");

    setTimeout(() => {
      alert('Login Successful!');
      toggleLoginModal();
      // onLoginSuccess();

      navigate('/after-login'); // ✅ Navigate to AfterLogin page
    }, 500);
    
  };

  const handleSignupClick = (e) => {
    e.preventDefault();
    toggleLoginModal(); // Close the login modal
    toggleSignupModal(); // Open the signup modal
  };

  return (
    <div
      className={`modal-overlay ${isOpen ? 'show' : ''}`}
      onClick={handleClose}
      aria-hidden={!isOpen}
    >
      <div className="modal login-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={handleClose} aria-label="Close">
          ×
        </button>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="forgot-password">
            <a href="#forgot">Forgot Password?</a>
          </div>
          <button type="submit" className="sign-in-button">
            Sign in
          </button>

          <div className="social-login">
            <p>Login with social accounts</p>
            <div className="social-icons">
              <button type="button" className="social-icon google">
                Google
              </button>
              <button type="button" className="social-icon facebook">
                Facebook
              </button>
              <button type="button" className="social-icon twitter">
                Twitter
              </button>
            </div>
          </div>

          <div className="signup-link">
            <p>
              Don't have an account?{' '}
              <button type="button" className="signup-btn" onClick={handleSignupClick}>
                Sign up
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;