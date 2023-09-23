// import React, { useState, useEffect } from 'react';
// import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import the necessary routing components
// import { useParams } from 'react-router-dom';


// function UserProfile() {
//   const { userId } = useParams();
//   const [userProfile, setUserProfile] = useState(null);
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);


//   useEffect(() => {
//     // const userId = match.params.userId;

//     // Fetch user profile information
//     fetch(`http://localhost:3002/users/profile/${userId}`) 
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('User not found');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setUserProfile(data);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         setError(error.message || 'Could not fetch user profile');
//         setIsLoading(false);
//       });
//   }, [userId]);
//   return (
//     <div>
//       <h2>User Profile</h2>
//       {isLoading ? (
//         <p>Loading user profile...</p>
//       ) : (
//         <div>
//           {error ? (
//             <div className="error-message">{error}</div>
//           ) : (
//             <div>
//               <p>ID: {userProfile.id}</p>
//               <p>First Name: {userProfile.firstName}</p>
//               <p>Last Name: {userProfile.lastName}</p>
//               <p>Email: {userProfile.email}</p>
//               <p>Username: {userProfile.username}</p>

//             {/* Use Link to navigate to the edit user page */}
//             <Link to={`/edit/${userProfile.id}`} className="btn btn-primary">Edit User</Link>
//             <Link to={`/delete/${userProfile.id}`} className="btn btn-primary">Delete User</Link>
//             </div>
            
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default UserProfile; // initial working code 

// import React, { useState, useEffect } from 'react';
// import { Link, useParams, useNavigate } from 'react-router-dom';

// function UserProfile() {
//   const { userId } = useParams();
//   const navigate = useNavigate();
//   const [userProfile, setUserProfile] = useState(null);
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Fetch user profile information with JWT token in the headers
//     const token = localStorage.getItem('token');
//     if (!token) {
//       // Handle the case where the user is not authenticated
//       navigate('/login');
//       return;
//     }

//     fetch(`http://localhost:3002/users/profile/${userId}`, {
//       headers: {
//         'Authorization': `Bearer ${token}`, // Include the JWT token
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('User not found');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setUserProfile(data);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         setError(error.message || 'Could not fetch user profile');
//         setIsLoading(false);
//       });
//   }, [userId, navigate]);

//   return (
//     <div>
//       <h2>User Profile</h2>
//       {isLoading ? (
//         <p>Loading user profile...</p>
//       ) : (
//         <div>
//           {error ? (
//             <div className="error-message">{error}</div>
//           ) : (
//             <div>
//               <p>ID: {userProfile.id}</p>
//               <p>First Name: {userProfile.firstName}</p>
//               <p>Last Name: {userProfile.lastName}</p>
//               <p>Email: {userProfile.email}</p>
//               <p>Username: {userProfile.username}</p>

//               {/* Use Link to navigate to the edit user page */}
//               <Link to={`/edit/${userProfile.id}`} className="btn btn-primary">
//                 Edit User
//               </Link>
//               <Link to={`/delete/${userProfile.id}`} className="btn btn-primary">
//                 Delete User
//               </Link>

//               {/* Add a link to navigate to the user's puzzles or any other relevant page */}
//               <Link to={`/user/${userProfile.id}/puzzles`} className="btn btn-primary">
//                 My Puzzles
//               </Link>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default UserProfile;

import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './UserProfile.css'; // Import your CSS file for styling
import { Navbar } from './Nav';

function UserProfile() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch user profile information with JWT token in the headers
    const token = localStorage.getItem('token');
    if (!token) {
      // Handle the case where the user is not authenticated
      navigate('/login');
      return;
    }

    fetch(`http://localhost:3000/users/profile/${userId}`, {
      headers: {
        'Authorization': `Bearer ${token}`, // Include the JWT token
      },
    })
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
  }, [userId, navigate]);

  // Redirect to login page when user deletes their profile
  const handleDeleteUser = () => {
    // Perform deletion logic here
    // After deletion, navigate to the login page
    navigate('/login');
  };

  // Redirect to user profile after updating information
  const handleUpdateUser = () => {
    // Perform update logic here
    // After successful update, navigate back to the user's profile
    navigate(`/user/${userId}`);
  };

  return (
    <>
    <Navbar />
    <br />
    <br />
    <div className="user-profile-container">
      <h2 className="user-profile-heading">User Profile</h2>
      {isLoading ? (
        <p>Loading user profile...</p>
      ) : userProfile ? (
        // Check if userProfile is not null
        <div className="user-profile-details">
          {error ? (
            <div className="error-message">{error}</div>
          ) : (
            <div>
              <p>ID: {userProfile.id}</p>
              <p>First Name: {userProfile.firstName}</p>
              <p>Last Name: {userProfile.lastName}</p>
              <p>Email: {userProfile.email}</p>
              <p>Username: {userProfile.username}</p>
            </div>
          )}
        </div>
      ) : (
        <div className="error-message">User profile not found</div>
      )}
  
      <div className="user-profile-buttons">
        <Link to={`/edit/${userProfile?.id}`} className="user-profile-button">
          Edit User
        </Link>
        <button className="user-profile-button" onClick={handleDeleteUser}>
          Delete User
        </button>
        <Link to={`/user/${userProfile?.id}/puzzles`} className="user-profile-button">
          My Puzzles
        </Link>
        <button className="user-profile-button" onClick={handleUpdateUser}>
          Update User
        </button>
      </div>
    </div>
  </>
  
  );
}

export default UserProfile;

