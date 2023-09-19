import React, { useState, useEffect } from 'react';
import { Link, BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import { Navigate } from 'react-router-dom';

function UserLogin() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  const navigate =useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);


    try {
      const response = await fetch('http://localhost:3002/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log('Request Data:', formData); // Log the request data
      console.log('Response Data:', response); 

      if (response.ok) {
        // Handle successful login (e.g., redirect to a dashboard)
        console.log('Login successful');
        navigate('/welcome')
        
        // Redirect the user here
      } else {
        // Handle login error (e.g., display an error message)
        const errorData = await response.json();
        setError(errorData.error || 'Login failed');
      }
    } catch (error) {
      // Handle network errors or exceptions
      console.error('Login error:', error.message);
      setError('Network error, please try again');
    } finally {
      setIsLoading(false);
    }
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  return (
    <div>
      <h2>User Login</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
      <label htmlFor="username" className="form-label">Username</label>
        <input
        type="text" 
          name="username" className="form-control"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          id="username" 
          required
        />
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input
          type="password"
          name="password" className="form-control"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          id="password"
          required
        />
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button> 
        <Link to='/register' className="btn btn-primary">Create User</Link>
      </form>
    </div>
    
  );
}

export default UserLogin;

