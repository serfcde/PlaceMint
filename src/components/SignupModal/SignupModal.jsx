import React, { useState } from 'react';
import './SignupModal.css';

const SignupModal = ({ isOpen, toggleSignupModal, toggleLoginModal }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ firstName, lastName, email, password, confirmPassword });
    // Show success message
    setShowSuccessMessage(true);
    
    // Optional: Clear form fields after successful submission
    // setFirstName('');
    // setLastName('');
    // setEmail('');
    // setPassword('');
    // setConfirmPassword('');
    
    // Optional: Hide success message after a few seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
      // Optional: Close the modal after showing success message
      // toggleSignupModal();
    }, 3000);
  };

  const switchToLogin = () => {
    toggleSignupModal(); // Close signup modal
    if (toggleLoginModal) toggleLoginModal(); // Open login modal
  };

  // If the modal is not open, don't render anything
  if (!isOpen) return null;

  return (
    <div className="signup-modal-overlay" onClick={() => toggleSignupModal()}>
      <div className="signup-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="signup-form-container">
          <div className="signup-header">
            <div className="logo"></div>
            <h1 className="title">Sign Up</h1>
          </div>
          <p className="subtitle">
            Signup now and get full access to our website
          </p>
          
          {/* Success Message */}
          {showSuccessMessage && (
            <div className="success-message">
              Signed up successfully!
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="name-inputs">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Firstname"
                className="input-field"
                required
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Lastname"
                className="input-field"
                required
              />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="input-field"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="input-field"
              required
            />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
              className="input-field"
              required
            />
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
          <p className="switch-modal">
            Already have an account? <button className="switch-button" onClick={switchToLogin}>Login</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;