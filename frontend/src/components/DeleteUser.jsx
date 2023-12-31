// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// function DeleteUser() {
//   const [error, setError] = useState(null);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const { userId } = useParams();
//   useEffect(() => {
//     // Create a variable to store whether the component is mounted
//     let isMounted = true;
//     // Function to handle the user deletion
//     const deleteUser = async () => {
//       try {
//         // Send a DELETE request to delete the user
//         const response = await fetch(`http://localhost:3002/users/delete/${userId}`, {
//           method: 'DELETE',
//         });
//         if (response.ok && isMounted) {
//           // Handle successful deletion (e.g., display a success message)
//           console.log('User deleted successfully');
//         } else if (isMounted) {
//         } else if (isMounted) {
//           // Handle deletion error (e.g., display an error message)
//           const errorData = await response.json();
//           setError(errorData.error || 'User deletion failed');
//         }
//       } catch (error) {
//         // Handle network errors or exceptions
//         if (isMounted) {
//           console.error('User deletion error:', error.message);
//           setError('Network error, please try again');
//         }
//         if (isMounted) {
//           console.error('User deletion error:', error.message);
//           setError('Network error, please try again');
//         }
//       } finally {
//         // If the component is mounted, update the state
//         if (isMounted) {
//           setIsDeleting(false);
//         }
//       }
//         // If the component is mounted, update the state
//         if (isMounted) {
//           setIsDeleting(false);
//         }
//       }
//     };
//     setIsDeleting(true);
//     deleteUser();
//     return () => {
//       isMounted = false;
//     };
//     return () => {
//       isMounted = false;
//     };
//   }, [userId]);
//   return (
//     <div>
//       <h2>Delete User</h2>
//       {isDeleting ? (
//         <p>Deleting user...</p>
//       ) : (
//         <div>
//           {error ? (
//             <div className="error-message">{error}</div>
//           ) : (
//             <p>User deleted successfully</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }
// export default DeleteUser;

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// function DeleteUser() {
//   const [error, setError] = useState(null);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const { userId } = useParams();

//   useEffect(() => {
//     // Create a variable to store whether the component is mounted
//     let isMounted = true;

//     // Function to handle the user deletion
//     const deleteUser = async () => {
//       try {
//         // Send a DELETE request to delete the user
//         const response = await fetch(`http://localhost:3002/users/delete/${userId}`, {
//           method: 'DELETE',
//         });

//         if (response.ok && isMounted) {
//           // Handle successful deletion (e.g., display a success message)
//           console.log('User deleted successfully');
//         } else if (isMounted) {
//           // Handle deletion error (e.g., display an error message)
//           const errorData = await response.json();
//           setError(errorData.error || 'User deletion failed');
//         }
//       } catch (error) {
//         // Handle network errors or exceptions
//         if (isMounted) {
//           console.error('User deletion error:', error.message);
//           setError('Network error, please try again');
//         }
//       } finally {
//         // If the component is mounted, update the state
//         if (isMounted) {
//           setIsDeleting(false);
//         }
//       }
//     };

//     setIsDeleting(true);
//     deleteUser();

//     return () => {
//       isMounted = false;
//     };
//   }, [userId]);

//   return (
//     <div>
//       <h2>Delete User</h2>
//       {isDeleting ? (
//         <p>Deleting user...</p>
//       ) : (
//         <div>
//           {error ? (
//             <div className="error-message">{error}</div>
//           ) : (
//             <p>User deleted successfully</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default DeleteUser; // initial working code 

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

// function DeleteUser() {
//   const [error, setError] = useState(null);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const { userId } = useParams();
//   const navigate = useNavigate(); // Use useNavigate instead of useHistory

  

//   useEffect(() => {
//     // Check if the user is authenticated (e.g., by verifying the presence of a token in localStorage)
//     const token = localStorage.getItem('token');

//     if (!token) {
//       // Redirect unauthenticated users to the login page
//       navigate('/login');
//       return;
//     }

//     // Create a variable to store whether the component is mounted
//     let isMounted = true;

//     // Function to handle the user deletion
//     const deleteUser = async () => {
//       try {
//         // Send a DELETE request to delete the user
//         const response = await fetch(`http://localhost:3002/users/delete/${userId}`, {
//           method: 'DELETE',
//           headers: {
//             'Authorization': `Bearer ${token}`, // Include the authentication token in the headers
//           },
//         });

//         if (response.ok && isMounted) {
//           // Handle successful deletion (e.g., display a success message)
//           console.log('User deleted successfully');
//         } else if (isMounted) {
//           // Handle deletion error (e.g., display an error message)
//           const errorData = await response.json();
//           setError(errorData.error || 'User deletion failed');
//         }
//       } catch (error) {
//         // Handle network errors or exceptions
//         if (isMounted) {
//           console.error('User deletion error:', error.message);
//           setError('Network error, please try again');
//         }
//       } finally {
//         // If the component is mounted, update the state
//         if (isMounted) {
//           setIsDeleting(false);
//         }
//       }
//     };

//     setIsDeleting(true);
//     deleteUser();

//     return () => {
//       isMounted = false;
//     };
//   }, [userId, navigate]);

//   return (
//     <div>
//       <h2>Delete User</h2>
//       {isDeleting ? (
//         <p>Deleting user...</p>
//       ) : (
//         <div>
//           {error ? (
//             <div className="error-message">{error}</div>
//           ) : (
//             <p>User deleted successfully</p>
            
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default DeleteUser;

import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

function DeleteUser() {
  const [error, setError] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const { userId } = useParams();
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  

  useEffect(() => {
    // Check if the user is authenticated (e.g., by verifying the presence of a token in localStorage)
    const token = localStorage.getItem('token');

    if (!token) {
      // Redirect unauthenticated users to the login page
      navigate('/login');
      return;
    }

    // Create a variable to store whether the component is mounted
    let isMounted = true;

    // Function to handle the user deletion
    const deleteUser = async () => {
      try {
        // Send a DELETE request to delete the user
        const response = await fetch(`http://localhost:3002/users/delete/${userId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`, // Include the authentication token in the headers
          },
        });

        if (response.ok && isMounted) {
          // Handle successful deletion (e.g., display a success message)
          console.log('User deleted successfully');
        } else if (isMounted) {
          // Handle deletion error (e.g., display an error message)
          const errorData = await response.json();
          setError(errorData.error || 'User deletion failed');
        }
      } catch (error) {
        // Handle network errors or exceptions
        if (isMounted) {
          console.error('User deletion error:', error.message);
          setError('Network error, please try again');
        }
      } finally {
        // If the component is mounted, update the state
        if (isMounted) {
          setIsDeleting(false);
        }
      }
    };

    setIsDeleting(true);
    deleteUser();

    return () => {
      isMounted = false;
    };
  }, [userId, navigate]);

  return (
    <div>
      <h2>Delete User</h2>
      {isDeleting ? (
        <p>Deleting user...</p>
      ) : (
        <div>
          {error ? (
            <div className="error-message">{error}</div>
          ) : (
            <p>User deleted successfully</p>
            
          )}
        </div>
      )}
    </div>
  );
}

export default DeleteUser;










