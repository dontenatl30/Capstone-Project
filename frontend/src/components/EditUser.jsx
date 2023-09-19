// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";

// function EditUser({ match }) {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//   });
//   const [error, setError] = useState(null);
//   const [isFetching, setIsFetching] = useState(true);
//   const { userId } = useParams();

//   useEffect(() => {
   

//     // Fetch the user data for editing
//     fetch(`http://localhost:3002/users/edit/${userId}`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("User not found");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setFormData({
//           firstName: data.firstName,
//           lastName: data.lastName,
//           email: data.email,
//         });
//         setIsFetching(false);
//       })
//       .catch((error) => {
//         setError(error.message || "Could not fetch user for edit");
//         setIsFetching(false);
//       });
//   }, [userId]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {

//       // Update the user's information
//       const response = await fetch(`http://localhost:3002/users/edit/${userId}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         // Handle successful update (e.g., display a success message)
//         console.log("User updated successfully");
//       } else {
//         // Handle update error (e.g., display an error message)
//         const errorData = await response.json();
//         setError(errorData.error || "User update failed");
//       }
//     } catch (error) {
//       // Handle network errors or exceptions
//       console.error("User update error:", error.message);
//       setError("Network error, please try again");
//     }
//   };

//   // const handleChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setFormData({ ...formData, [name]: value });
//   // };

//   return (
//     <div>
//       <h2>Edit User</h2>
//       {isFetching ? (
//         <p>Loading user data...</p>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="firstName" className="form-label">
//             First Name
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             name="firstName"
//             value={formData.firstName}
//             onChange={(e) =>
//               setFormData({ ...formData, firstName: e.target.value })
//             }
//             id="firstName"
//             required
//           />
//           <label htmlFor="lastName" className="form-label">
//             Last Name
//           </label>
//           <input
//             type="lastName"
//             className="form-control"
//             name="lastName"
//             value={formData.lastName}
//             onChange={(e) =>
//               setFormData({ ...formData, lastName: e.target.value })
//             }
//             id="lastName"
//             required
//           />

//           <label htmlFor="emailAddress" className="form-label">
//             Email Address
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             name="email"
//             value={formData.email}
//             onChange={(e) =>
//               setFormData({ ...formData, email: e.target.value })
//             }
//             id="email"
//             required
//           />
//           <button type="submit">Update User</button>
//         </form>
//       )}
//     </div>
//   );
// }

// export default EditUser; // initial working code 
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function EditUser() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const { userId } = useParams();
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  useEffect(() => {
    // Check if the user is authenticated (e.g., by verifying the presence of a token in localStorage)
    const token = localStorage.getItem('token');

    if (!token) {
      // Redirect unauthenticated users to the login page
      navigate('/login');
    } else {
      // Fetch the user data for editing
      fetch(`http://localhost:3002/users/edit/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('User not found');
          }
          return response.json();
        })
        .then((data) => {
          setFormData({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
          });
          setIsFetching(false);
        })
        .catch((error) => {
          setError(error.message || 'Could not fetch user for edit');
          setIsFetching(false);
        });
    }
  }, [userId, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Check if the user is still authenticated
      const token = localStorage.getItem('token');

      if (!token) {
        // Redirect unauthenticated users to the login page
        navigate('/login');
        return;
      }

      // Update the user's information
      const response = await fetch(`http://localhost:3002/users/edit/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful update (e.g., display a success message)
        console.log('User updated successfully');
      } else {
        // Handle update error (e.g., display an error message)
        const errorData = await response.json();
        setError(errorData.error || 'User update failed');
      }
    } catch (error) {
      // Handle network errors or exceptions
      console.error('User update error:', error.message);
      setError('Network error, please try again');
    }
  };

  return (
    <div>
      <h2>Edit User</h2>
      {isFetching ? (
        <p>Loading user data...</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            id="firstName"
            required
          />
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            id="lastName"
            required
          />

          <label htmlFor="emailAddress" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            id="email"
            required
          />
          <button type="submit">Update User</button>
        </form>
      )}
    </div>
  );
}

export default EditUser;
