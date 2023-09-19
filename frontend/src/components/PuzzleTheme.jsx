import React, { useState, useEffect } from 'react';
import { Navbar } from './Nav';
import MyJigsawPuzzle from './JigsawPuzzle';
import DifficultySelector from './DifficultySelector';
import { Navbar } from './Nav';
import { PuzzlePiece } from 'phosphor-react';
=======


export const Theme = () => {
  const [selectedTheme, setSelectedTheme] = useState('');
  const [selectedThemeImage, setSelectedThemeImage] = useState('');
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [solvedRiddle, setSolvedRiddle] = useState(null);

  const themes = ['nature', 'science', 'sports', 'animals', 'food', 'music'];

  const changeTheme = (theme) => {
    console.log('Changing theme to:', theme);
    setSelectedTheme(theme);
  };

  const fetchRandomImage = async (theme, page, perPage) => {
    try {
      setFetching(true);
      const baseURL = 'https://pixabay.com/api/';
      const API_KEY = '39230660-a4bee92977e02c758c511e738';
      const query = encodeURIComponent(theme);
      const apiUrl = `${baseURL}?key=${API_KEY}&q=${query}&page=${page}&per_page=${perPage}`;
      console.log('Fetching images from:', apiUrl);
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        console.error('Network response was not ok:', response.status);
        throw new Error(`Network response was not ok: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Fetched image data:', data);
  
      if (data.hits && data.hits.length > 0) {
        console.log('Random image hits:', data.hits);
        const randomIndex = Math.floor(Math.random() * data.hits.length);
        const randomImage = data.hits[randomIndex];
        setSelectedThemeImage(randomImage.largeImageURL);
        setError(null);
      } else {
        console.warn('No images found in the response.');
        setError('No images found in the response.');
        setSelectedThemeImage('');
      }
    } catch (error) {
      console.error('Error fetching images:', error);
      setError(`Error fetching images: ${error.message}`);
      setSelectedThemeImage('');
    } finally {
      setFetching(false);
    }
  };
  

  useEffect(() => {
    if (selectedTheme) {
      fetchRandomImage(selectedTheme);
    }
  }, [selectedTheme]);

  // Define setSolvedRiddle function
  const handleSetSolvedRiddle = (riddle) => {
    setSolvedRiddle(riddle);
  };

  return (
    <>
      <Navbar />
      <br />
      <br />
      <h1>Select Your Puzzle Theme!</h1>
      <PuzzlePiece size={75}/><PuzzlePiece size={75}/><PuzzlePiece size={75}/>
      <div>
        <div className="container">
          <div className="row">
          <div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="card mb-4">
                <div className="card-body">
                  <img
                    src="https://t4.ftcdn.net/jpg/05/47/97/81/240_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg"
                    alt="Card Nature"
                    className="card-img-top"
                  />
                  <h5 className="card-title">Nature</h5>
                  <button
                    onClick={() => changeTheme("nature")}
                    className="btn btn-primary"
                  >
                    Select Theme
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="card mb-4">
                <div className="card-body">
                  <img
                    src="https://www.nature.com/nature-index/article/image/5d89bb619d9f8b4e3a215e30"
                    alt="Card Science"
                    className="card-img-top"
                  />
                  <h5 className="card-title">Science</h5>
                  <button
                    onClick={() => changeTheme("science")}
                    className="btn btn-primary"
                  >
                    Select Theme
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="card mb-4">
                <div className="card-body">
                  <img
                    src="https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?size=626&ext=jpg&ga=GA1.2.1365554283.1694871953&semt=ais"
                    alt="Card Sports"
                    className="card-img-top"
                  />
                  <h5 className="card-title">Sports</h5>
                  <button
                    onClick={() => changeTheme("sports")}
                    className="btn btn-primary"
                  >
                    Select Theme
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="card mb-4">
                <div className="card-body">
                  <img
                    src="https://t4.ftcdn.net/jpg/05/62/99/31/240_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg"
                    alt="Card Animals"
                    className="card-img-top"
                  />
                  <h5 className="card-title">Animals</h5>
                  <button
                    onClick={() => changeTheme("animals")}
                    className="btn btn-primary"
                  >
                    Select Theme
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="card mb-4">
                <div className="card-body">
                  <img
                    src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg?w=740&t=st=1694995852~exp=1694996452~hmac=d1a5ee865d1441eb5889deaa835597823cefac8c6bd1c3b4b414bcf7040ab862"
                    alt="Card Food"
                    className="card-img-top"
                  />
                  <h5 className="card-title">Food</h5>
                  <button
                    onClick={() => changeTheme("food")}
                    className="btn btn-primary"
                  >
                    Select Theme
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="card mb-4">
                <div className="card-body">
                  <img
                    src="https://steemitimages.com/DQmTrscBhGg3cLSecpUtCP7tKQNHSmagXU2z8knPWeyaCP9/Music-Wallpaper-HD-1080p-42.jpg"
                    alt="Card Music"
                    className="card-img-top"
                  />
                  <h5 className="card-title">Music</h5>
                  <button
                    onClick={() => changeTheme("music")}
                    className="btn btn-primary"
                  >
                    Select Theme
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          </div>
        </div>
      </div>
      {selectedThemeImage && (
        <>
          {fetching ? (
            <div>Loading random image...</div>
          ) : (
            <>
              {error && <div className="error-message">{error}</div>}
              <DifficultySelector
                onSelectDifficulty={(difficulty) => setSelectedDifficulty(difficulty)}
              />
              {selectedDifficulty && (
                <MyJigsawPuzzle
                  selectedTheme={selectedTheme}
                  randomImageFileName={selectedThemeImage}
                  selectedDifficulty={selectedDifficulty}
                  setSolvedRiddle={handleSetSolvedRiddle}
                />
              )}
            </>
          )}
        </>
      )}
    </>
  );
};