import React, { useState } from 'react';
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";

function CreateUser() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3002/users/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('User created:', data.user);
        // Handle success (e.g., show a success message or redirect)
      } else {
        // Handle error response (e.g., show an error message)
        console.error('Error creating user:', response.statusText);
      }
    } catch (error) {
      // Handle network errors or exceptions
      console.error('Error creating user:', error.message);
    }
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  return (
    <>
    <h1 className="title">Puzzle Facts</h1>
    <br>
    </br>
    <h3>Register Below</h3>
    <br>
    </br>
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="firstName" className="form-label">First Name</label>
      <input type="firstName" className="form-control" name="firstName" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} id="firstName" required/>
    </div>
    <div className="mb-3">
      <label htmlFor="lastName" className="form-label">Last Name</label>
      <input type="lastName" className="form-control" name="lastName" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} id="lastName"required/>
    </div>
    <div className="mb-3">
      <label htmlFor="emailAddress" className="form-label">Email Address</label>
      <input type="email" className="form-control" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} id="email" required/>
    </div>
    <div className="mb-3">
      <label htmlFor="username" className="form-label">Username</label>
      <input type="username" className="form-control" name="username" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} id="username" required/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPasswpasswordord1" className="form-label">Password</label>
      <input type="password" className="form-control" name="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} id="password" required/>
    </div>   
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  <br>
  </br>
  <div>Already Registered?</div>
  <Link to='/login'>Login Here</Link>
  </>
  );
}

export default CreateUser;