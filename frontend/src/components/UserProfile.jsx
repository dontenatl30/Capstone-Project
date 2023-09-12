import React, { useState, useEffect } from 'react';
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import the necessary routing components
import { useParams } from 'react-router-dom';


function UserProfile() {
  const { userId } = useParams();
  const [userProfile, setUserProfile] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    // const userId = match.params.userId;

    // Fetch user profile information
    fetch(`http://localhost:3002/users/profile/${userId}`) 
      .then((response) => {
        if (!response.ok) {
          throw new Error('User not found');
        }
        return response.json();
      })
      .then((data) => {
        setUserProfile(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message || 'Could not fetch user profile');
        setIsLoading(false);
      });
  }, [userId]);
  return (
    <div>
      <h2>User Profile</h2>
      {isLoading ? (
        <p>Loading user profile...</p>
      ) : (
        <div>
          {error ? (
            <div className="error-message">{error}</div>
          ) : (
            <div>
              <p>ID: {userProfile.id}</p>
              <p>First Name: {userProfile.firstName}</p>
              <p>Last Name: {userProfile.lastName}</p>
              <p>Email: {userProfile.email}</p>
              <p>Username: {userProfile.username}</p>

            {/* Use Link to navigate to the edit user page */}
            <Link to={`/edit/${userProfile.id}`} className="btn btn-primary">Edit User</Link>
            <Link to={`/delete/${userProfile.id}`} className="btn btn-primary">Delete User</Link>
            </div>
            
          )}
        </div>
      )}
    </div>
  );
}

export default UserProfile;
