// import React, { useEffect, useState } from 'react';


// const API_KEY = '39230660-a4bee92977e02c758c511e738';
// const themes = [
//   'backgrounds', 'fashion', 'nature', 'science', 'education',
//   'feelings', 'health', 'people', 'religion', 'places',
//   'animals', 'industry', 'computer', 'food', 'sports',
//   'transportation', 'travel', 'buildings', 'business', 'music'
// ];

// const baseURL = "https://pixabay.com/api/";

// export async function fetchImagesForTheme(theme, page, perPage) {
//   console.log(`Fetching images for theme: ${theme}`);
//   if (imageSeeder[theme] && imageSeeder[theme].length >= perPage) {
//     console.log(`Using existing images for theme: ${theme}`);
//     return imageSeeder[theme].slice(0, perPage);
//   } else {
//     const URL = `${baseURL}?key=${API_KEY}&q=${encodeURIComponent(theme)}&page=${page}&per_page=${perPage}`;
//     try {
//       const response = await fetch(URL);
//       const data = await response.json();
//       if (parseInt(data.totalHits) > 0) {
//         const newImages = data.hits.map(hit => hit.largeImageURL);
//         console.log(`Fetched ${newImages.length} new images for theme: ${theme}`);
//         if (!imageSeeder[theme]) {
//           imageSeeder[theme] = [];
//         }
//         imageSeeder[theme] = imageSeeder[theme].concat(newImages.slice(0, perPage));
//         console.log(`Total images for theme ${theme}: ${imageSeeder[theme].length}`);
//         // Send the fetched images to your backend
//         try {
//           const backendResponse = await fetch('/api/store-images', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ theme, images: newImages }),
//           });
//           if (backendResponse.ok) {
//             const result = await backendResponse.json();
//             console.log(result.message);
//           } else {
//             console.error('Failed to store images');
//           }
//         } catch (error) {
//           console.error('Error storing images:', error);
//         }
//         return newImages.slice(0, perPage);
//       } else {
//         console.log(`No hits for theme: ${theme}`);
//         return [];
//       }
//     } catch (error) {
//       console.error(`Error fetching images for theme ${theme}:`, error);
//       return [];
//     }
//   }
// }
// function PixabayImageFetcher({ selectedTheme }) {
//   const [themeImages, setThemeImages] = useState([]);
//   useEffect(() => {
//     const perPage = 25;
//     const fetchImagesForSelectedTheme = async () => {
//       const images = await fetchImagesForTheme(selectedTheme, 1, perPage);
//       setThemeImages(images);
//     };
//     fetchImagesForSelectedTheme();
//   }, [selectedTheme]);
//   return (
//     <div>
//       {/* Render your React components here */}
//       {themeImages.map((imageUrl, index) => (
//         <img key={index} src={imageUrl} alt={`Theme Image ${index}`} />
//       ))}
//     </div>
//   );
// }
// export default PixabayImageFetcher;


import React, { useEffect, useState } from 'react';

const API_KEY = '39230660-a4bee92977e02c758c511e738';

const fetchImagesForTheme = async (theme, page, perPage) => {
  try {
    const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(theme)}&page=${page}&per_page=${perPage}`;
    const response = await fetch(URL);
    if (response.ok) {
      const data = await response.json();
      return data.hits.map(hit => hit.largeImageURL);
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
    const perPage = 25;
    const fetchImagesForSelectedTheme = async () => {
      const images = await fetchImagesForTheme(selectedTheme, 1, perPage);
      try {
        const backendResponse = await fetch('/api/store-images', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ theme: selectedTheme, images }),
        });
        if (backendResponse.ok) {
          const result = await backendResponse.json();
          console.log(result.message);
        } else {
          console.error('Failed to store images');
        }
      } catch (error) {
        console.error('Error storing images:', error);
      }

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
