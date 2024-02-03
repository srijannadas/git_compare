
import React, { useState } from 'react';
import './login.css';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <input
        type="text"
        name="email"
        placeholder="Email Address or Phone Number"
        value={email}
        onChange={handleChange}
        className="input-field"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={handleChange}
        className="input-field"
      />
      <button type="submit" className="submit-button">Login</button>
      <p className="or-text">or login with</p>
      <button className="sign-up-button">Doesn't have account? Sign Up</button>
      <button className="forgot-password-button">Forgot Password?</button>
    </form>
  );
};

export default LoginForm;

