import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import from react-router-dom as needed

function withAuth(Component) {
  return function AuthComponent() {
    const [loading, setLoading] = useState(true);
    const history = useHistory();

    useEffect(() => {
      // Perform a check for authentication using your backend API
      fetch('/api/users/authCheck', { method: 'POST' }) // Send a request to your authCheck endpoint
        .then((response) => {
          if (response.ok) {
            setLoading(false);
          } else {
            history.push('/login'); // Redirect to the login page if not authenticated
          }
        })
        .catch((error) => {
          console.error('Authentication error:', error);
          history.push('/login'); // Redirect to the login page on error
        });
    }, [history]);

    if (loading) {
      return <div>Loading...</div>;
    }

    return <Component />;
  };
}

export default withAuth;
