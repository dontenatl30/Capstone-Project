import React, { useEffect } from 'react';

function UserLogout() {
  useEffect(() => {
    
    localStorage.removeItem('token');
    window.location.href = '/login';
  }, []);

  return (
    <div>
      <p>Logging out...</p>
    </div>
  );
}

export default UserLogout;

