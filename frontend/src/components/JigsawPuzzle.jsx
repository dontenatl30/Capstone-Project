import React from 'react';
import JigsawPuzzle from 'react-jigsaw-puzzle';

function MyJigsawPuzzle() {
  // Define your puzzle image and piece size
  const imageUrl = 'path/to/your/puzzle-image.jpg';
  const pieceSize = { width: 100, height: 100 };

  return (
    <div>
      <h1>Jigsaw Puzzle</h1>
      <JigsawPuzzle
        image={imageUrl}
        pieceSize={pieceSize}
        numRows={3} // Number of rows in the puzzle grid
        numCols={3} // Number of columns in the puzzle grid
        onSolve={() => alert('Puzzle solved!')} // Callback when the puzzle is solved
      />
    </div>
  );
}

export default MyJigsawPuzzle;
