import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function UserLogout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('token');
    navigate('/welcome', { replace: true }); // Use navigate to redirect to the login page
  }, [navigate]);

  return (
    <div>
      <p>Logging out...</p>
    </div>
  );
}

export default UserLogout;



