import React, { useState, useEffect } from "react";
import MyJigsawPuzzle from "./JigsawPuzzle";

export const Theme = () => {
  const [selectedTheme, setSelectedTheme] = useState("");
  const [images, setImages] = useState([]);
  const [fetching, setFetching] = useState(false);

  const themes = [
    'backgrounds', 'fashion', 'nature', 'science', 'education',
    'feelings', 'health', 'people', 'religion', 'places',
    'animals', 'industry', 'computer', 'food', 'sports',
    'transportation', 'travel', 'buildings', 'business', 'music'
  ];

  const changeTheme = async (theme) => {
    setSelectedTheme(theme);
  };

  useEffect(() => {
    if (selectedTheme) {
      const baseURL = "https://pixabay.com/api/";
      const API_KEY = "39230660-a4bee92977e02c758c511e738";
      const query = encodeURIComponent(selectedTheme);

      fetch(`${baseURL}?key=${API_KEY}&q=${query}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => setImages(data.hits))
        .catch((error) => console.error("Error fetching images:", error));
    }
  }, [selectedTheme]);

  const seedDatabase = async (themeToSeed) => {
    try {
      const imagesToSeed = images.map((image) => ({
        name: image.user,
        puzzleTheme: themeToSeed,
        image: image.webformatURL, 
        timeToComplete: 0, 
        createdAt: new Date(),
        updatedAt: new Date(),
      }));
      const response = await fetch("/api/seed-database", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ theme: themeToSeed, images: imagesToSeed }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.message);
      } else {
        console.error("Failed to fetch and store images");
      }
    } catch (error) {
      console.error("Error seeding the database:", error);
    }
  };

return (
  <>
    <div className="theme">This is the theme page</div>
    {themes.map((theme) => (
      <button key={theme} onClick={() => changeTheme(theme)}>
        {theme.charAt(0).toUpperCase() + theme.slice(1)} 
      </button>
    ))}
    <button
      onClick={() => {
        if (!fetching) {
          setFetching(true);
          changeTheme(selectedTheme);
        }
      }}
    >
      {fetching ? "Fetching..." : `Fetch ${selectedTheme}`}
    </button>
    {images.map((image, index) => (
      <img key={index} src={image.webformatURL} alt={`Image ${index}`} />
    ))}
    <button onClick={() => seedDatabase(selectedTheme)}>Seed Database</button>
    {selectedTheme && <MyJigsawPuzzle images={images} />}
  </>
);
};

