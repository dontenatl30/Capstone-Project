
import React, { useState, useEffect } from 'react';
import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib';
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css';

function MyJigsawPuzzle({ images }) {
  const [timer, setTimer] = useState(0);
  const [isPuzzleSolved, setIsPuzzleSolved] = useState(false);
  const [startTime, setStartTime] = useState(null);

  const getRandomImage = () => {
    if (images && images.length > 0) {
      const randomIndex = Math.floor(Math.random() * images.length);
      return images[randomIndex].webformatURL;
    }
    return null;
  };

  const puzzlePieces = [
    { id: 1, imageSrc: getRandomImage(), position: { x: 100, y: 100 } },
    { id: 2, imageSrc: getRandomImage(), position: { x: 200, y: 200 } },
  ];

  const handlePieceDrag = (pieceId, newPosition) => {
  };

  const handlePuzzleSolved = () => {
    setIsPuzzleSolved(true);
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

  return (
    <div>
      <h1>Jigsaw Puzzle</h1>
      <p>Timer: {timer} seconds</p>
      <JigsawPuzzle
        imageSrc={getRandomImage()}
        rows={4}
        columns={4}
        onPieceDrag={handlePieceDrag}
        onPuzzleSolved={handlePuzzleSolved}
        onMouseDown={handlePuzzleStart} 
      />
    </div>
  );
}

export default MyJigsawPuzzle;



