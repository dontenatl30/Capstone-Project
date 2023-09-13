import React from "react";
import { Link } from "react-router-dom";


export const Reg = () => {
    return (
        <>
        <h1 className="title">Puzzle Facts</h1>
        <br>
        </br>
        <h3>Register Below</h3>
        <br>
        </br>
        <form>
        <div className="mb-3">
          <label for="firstName" className="form-label">First Name</label>
          <input type="text" className="form-control" id="firstName"/>
        </div>
        <div className="mb-3">
          <label for="lastName" className="form-label">Last Name</label>
          <input type="text" className="form-control" id="lastName"/>
        </div>
        <div className="mb-3">
          <label for="emailAddress" className="form-label">Email Address</label>
          <input type="email" className="form-control" id="email"/>
        </div>
        <div className="mb-3">
          <label for="username" className="form-label">Username</label>
          <input type="email" className="form-control" id="username"/>
        </div>
        <div className="mb-3">
          <label for="exampleInputPasswpasswordord1" className="form-label">Password</label>
          <input type="password" className="form-control" id="password"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <br>
      </br>
      <div>Already Registered?</div>
      <Link to='/login'>Login Here</Link>
      </>
    

    )
}