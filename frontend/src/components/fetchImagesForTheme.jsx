import React, { useEffect, useState } from 'react';

const fetchImagesForTheme = async (theme) => {
  try {
    const response = await fetch(`/api/get-images?theme=${theme}`);
    if (response.ok) {
      const data = await response.json();
      return data.images;
    } else {
      console.error('Failed to fetch images');
      return [];
    }
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};

function PixabayImageFetcher({ selectedTheme }) {
  const [themeImages, setThemeImages] = useState([]);
  useEffect(() => {
    const fetchImagesForSelectedTheme = async () => {
      const images = await fetchImagesForTheme(selectedTheme);
      setThemeImages(images);
    };
    fetchImagesForSelectedTheme();
  }, [selectedTheme]);

  return (
    <div>
      {themeImages.map((imageUrl, index) => (
        <img key={index} src={imageUrl} alt={`Theme Image ${index}`} />
      ))}
    </div>
  );
}

export default PixabayImageFetcher;
