import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function withAuth(Component) {
  return function AuthComponent() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
      // Perform a check for authentication using your backend API
      fetch('/api/users/authCheck', { method: 'POST' }) // Adjust the API endpoint
        .then((response) => {
          if (response.ok) {
            setLoading(false);
          } else {
            setError('Authentication failed'); // Set an error message
            setLoading(false);
            navigate('/login'); // Redirect to the login page if not authenticated
          }
        })
        .catch((error) => {
          console.error('Authentication error:', error);
          setError('Authentication error'); // Set an error message
          setLoading(false);
          navigate('/login'); // Redirect to the login page on error
        });
    }, [navigate]);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error}</div>; // Render an error message
    }

    return <Component />;
  };
}

export default withAuth;



