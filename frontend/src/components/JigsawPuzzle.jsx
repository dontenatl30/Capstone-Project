import React, { useState, useEffect } from 'react';
import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib';
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css';

function MyJigsawPuzzle({ selectedTheme, randomImageFileName, selectedDifficulty }) {
  const [timer, setTimer] = useState(0);
  const [isPuzzleSolved, setIsPuzzleSolved] = useState(false); // State to track puzzle solved status
  const [startTime, setStartTime] = useState(null);

  const handlePieceDrag = (pieceId, newPosition) => {
    // Handle piece dragging if needed
  };

  const onSolved = () => {
    setIsPuzzleSolved(true); // Mark the puzzle as solved
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
      {randomImageFileName && (
        <div>
          <img
            src={randomImageFileName}
            alt={`Random Image`}
            className="random-image"
            style={{ maxWidth: '100%' }}
          />
          {/* Render Jigsaw Puzzle based on selected difficulty */}
          <JigsawPuzzle
            imageSrc={randomImageFileName}
            rows={selectedDifficulty === 'easy' ? 2 : selectedDifficulty === 'medium' ? 4 : 8}
            columns={selectedDifficulty === 'easy' ? 2 : selectedDifficulty === 'medium' ? 6 : 8}
            onPieceDrag={handlePieceDrag}
            onSolved={onSolved}
            onMouseDown={handlePuzzleStart}
          />
        </div>
      )}
    </div>
  );
}

export default MyJigsawPuzzle;


