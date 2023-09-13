import React, { useState } from "react";
// import PixabayImageFetcher from "../src/Hooks/useApiFetcherThemeImages";
import PixabayImageFetcher from "../Hooks/useApiFetcherThemeImages";
import { imageSeeder } from "../../../seeders/shared";
import MyJigsawPuzzle from "./JigsawPuzzle";

export const Theme = () => {
  const [selectedTheme, setSelectedTheme] = useState("");
  const [selectedImage, setSelectedImage] = useState('');
  const [fetching, setFetching] = useState(false);

  const changeTheme = async (theme) => {
    try {
      const images = await fetchImagesForTheme(theme);
      console.log(`Fetched images for theme: ${theme}`, images);

      if (images.length > 0) {
        setSelectedImage(images[0]); // need to figure out how to change the image or get it from its store place
      }
    } catch (error) {
      console.error(`Error fetching images for theme ${theme}:`, error);
    } finally {
      setFetching(false);
    }
    setSelectedTheme(theme);
    setFetching(true);

    try {
      const images = await fetchImagesForTheme(theme);
      console.log(`Fetched images for theme: ${theme}`, images);
    } catch (error) {
      console.error(`Error fetching images for theme ${theme}:`, error);
    } finally {
      setFetching(false);
    }
  };

  const fetchImagesForTheme = async (theme) => {
    try {
      const baseURL = "https://pixabay.com/api/";
      const API_KEY = "39230660-a4bee92977e02c758c511e738";

      const URL = `${baseURL}?key=${API_KEY}&q=${encodeURIComponent(
        theme
      )}&page=1&per_page=25`;

      const response = await fetch(URL);
      console.log(`Response status: ${response.status}`);

      if (response.ok) {
        const data = await response.json();
        console.log("API Response:", data);

        if (data.hits && data.hits.length > 0) {
          const newImages = data.hits.map((hit) => hit.largeImageURL);

          console.log("Fetched newImages:", newImages);

          if (!imageSeeder[theme]) {
            imageSeeder[theme] = [];
          }

          imageSeeder[theme] = imageSeeder[theme].concat(newImages);

          return newImages;
        } else {
          console.log(`No hits for theme: ${theme}`);
          return [];
        }
      } else {
        throw new Error(`HTTP Error: ${response.status}`);
      }
    } catch (error) {
      console.error(`Error fetching images for theme ${theme}:`, error);
      return [];
    }
  };

  return (
    <>
      <div className="theme">This is the theme page</div>
      {/* Render buttons to select different themes */}
      {Object.keys(imageSeeder).map((theme) => (
        <button key={theme} onClick={() => changeTheme(theme)}>
          {theme}
        </button>
      ))}
      {/* Render a button to fetch images for the selected theme */}
      <button
        onClick={() => {
          if (!fetching) {
            changeTheme(selectedTheme);
          }
        }}
      >
        {fetching ? "Fetching..." : `Fetch ${selectedTheme}`}
      </button>
      {/* Render the fetched images using PixabayImageFetcher */}
      <PixabayImageFetcher imageSrc={selectedImage} />
    </>
  );
};
