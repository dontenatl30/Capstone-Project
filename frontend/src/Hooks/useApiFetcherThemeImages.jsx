import React, { useState, useEffect } from 'react';

const API_KEY = '39230660-a4bee92977e02c758c511e738';

function PixabayImageFetcher({ theme }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3002/api/pixabay?query=${encodeURIComponent(theme)}`, {
          headers: {
            'Authorization': `Bearer ${API_KEY}`,
          },
        });

        if (response.ok) {
          const responseData = await response.json();
          setData(responseData); 
          setLoading(false); 
          setError(null); 
        } else {
          setError('Error fetching data: ' + response.statusText);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data: ' + error.message); 
        setLoading(false);
      }
    };

    fetchData();
  }, [theme]);


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render your component content here
  return (
    <div>
      {/* Your React component content */}
    </div>
  );
}

export default PixabayImageFetcher;

