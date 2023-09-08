import React from "react";
export const Login = () => {
    return (
        <>

        <h1>Login</h1>
        <br>
        </br>
        <form>
  <div class="mb-3">
    <label for="email" class="form-label">Email address</label>
    <input type="email" class="form-control" id="email" />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="password"/>
  </div>
  <div class="mb-3 form-check">
  </div>
  <button type="submit" class="btn btn-primary">Login</button>
</form>
        
        
        </>
    )
}