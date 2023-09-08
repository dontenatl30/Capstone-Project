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
        <div class="mb-3">
          <label for="firstName" class="form-label">First Name</label>
          <input type="text" class="form-control" id="firstName"/>
        </div>
        <div class="mb-3">
          <label for="lastName" class="form-label">Last Name</label>
          <input type="text" class="form-control" id="lastName"/>
        </div>
        <div class="mb-3">
          <label for="emailAddress" class="form-label">Email Address</label>
          <input type="email" class="form-control" id="email"/>
        </div>
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input type="email" class="form-control" id="username"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPasswpasswordord1" class="form-label">Password</label>
          <input type="password" class="form-control" id="password"/>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      <br>
      </br>
      <div>Already Registered?</div>
      <Link to='/login'>Login Here</Link>
      </>
    

    )
}