import React, { useState, useEffect } from 'react';
import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib';
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css';

function MyJigsawPuzzle({ images, selectedTheme }) {
  const [timer, setTimer] = useState(0);
  const [isPuzzleSolved, setIsPuzzleSolved] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [riddle, setRiddle] = useState(null);
  const [fetchingRiddle, setFetchingRiddle] = useState(false);

  const getRandomImage = () => {
    if (images && images.length > 0) {
      const randomIndex = Math.floor(Math.random() * images.length);
      const imageUrl = images[randomIndex]?.image || null;
      console.log("Random image URL:", imageUrl);
      return imageUrl;
    }
    return null;
  };

  const randomImageUrl = getRandomImage();

  const handlePieceDrag = (pieceId, newPosition) => {
    // Handle piece dragging if needed
  };

  const handlePuzzleSolved = () => {
    setIsPuzzleSolved(true);
  };
  const handleSolveButtonClick = async () => {
    if (!fetchingRiddle && isPuzzleSolved) {
      setFetchingRiddle(true);
      try {
        await fetchRandomRiddle();
      } finally {
        setFetchingRiddle(false);
      }
    }
  };

  useEffect(() => {
    let interval;

    if (startTime && !isPuzzleSolved) {
      interval = setInterval(() => {
        const currentTime = new Date();
        const elapsedTime = Math.floor((currentTime - startTime) / 1000);
        setTimer(elapsedTime);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [startTime, isPuzzleSolved]);

  const handlePuzzleStart = () => {
    if (!startTime && !isPuzzleSolved) {
      setStartTime(new Date());
    }
  };

  useEffect(() => {
    // Function to fetch a random riddle based on the selected theme
    const fetchRandomRiddle = async () => {
      try {
        if (!selectedTheme) {
          return;
        }
  
        const apiUrl = `https://riddles-by-api-ninjas.p.rapidapi.com/v1/riddles/random?category=${selectedTheme}`;
        const apiKey = '24fff37d96mshab781704e4591b5p152682jsn5b1954a02c9e'; // Replace with your actual API key
  
        // Log that the API call is being made
        console.log('Fetching riddle...');
  
        // Make an API request to fetch a random riddle based on the theme
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'X-RapidAPI-Host': 'riddles-by-api-ninjas.p.rapidapi.com',
            'X-RapidAPI-Key': apiKey,
          },
        });
  
        if (!response.ok) {
          throw new Error('Failed to fetch riddle');
        }
  
        const riddleData = await response.json();
        setRiddle(riddleData.question);
      } catch (error) {
        console.error('Error fetching riddle:', error);
      } finally {
        setFetchingRiddle(false);
      }
    };
  
    // Call the function to fetch a random riddle when the puzzle is solved
    if (isPuzzleSolved && fetchingRiddle) {
      fetchRandomRiddle();
    }
  }, [isPuzzleSolved, selectedTheme, fetchingRiddle]);

  return (
    <div>
      <h1>Jigsaw Puzzle</h1>
      <p>Timer: {timer} seconds</p>
      {randomImageUrl && (
        <>
          <JigsawPuzzle
            imageSrc={randomImageUrl || 'default-image-url'} // Use the selected random image
            rows={2}
            columns={2}
            onPieceDrag={handlePieceDrag}
            onPuzzleSolved={handlePuzzleSolved}
            onMouseDown={handlePuzzleStart} 
          />
          <button onClick={handleSolveButtonClick} disabled={fetchingRiddle}>
            {fetchingRiddle ? 'Fetching Riddle...' : 'Solve'}
          </button>
        </>
      )}
      {riddle && (
        <div>
          <h2>Riddle:</h2>
          <p>{riddle}</p>
          {/* You can add a button or other UI to show/hide the answer */}
        </div>
      )}
    </div>
  );
}

export default MyJigsawPuzzle;









// 24fff37d96mshab781704e4591b5p152682jsn5b1954a02c9e