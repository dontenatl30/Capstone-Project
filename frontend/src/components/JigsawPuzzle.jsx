import React from 'react';
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
// import { JigsawPuzzle } from 'react-jigsaw-puzzle';
// import { JigsawPuzzle, JigsawPiece } from 'react-jigsaw-puzzle';
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
// import { Navigate, useNavigate } from 'react-router-dom';


function MyJigsawPuzzle({ imageSrc }) {
  const puzzlePieces = [
    { id: 1, imageSrc: 'path/to/piece1.png', position: { x: 100, y: 100 } },
    { id: 2, imageSrc: 'path/to/piece2.png', position: { x: 200, y: 200 } },
  ];
  // Handle puzzle piece drag-and-drop events
  const handlePieceDrag = (pieceId, newPosition) => {
    // Implement your logic for handling piece movement here
    // You can update the state to store the new positions of pieces
  };

  const handlePuzzleSolved = () => {
    // pending code
  };
  
  return (
    <div>
      <h1>Jigsaw Puzzle</h1>
      <JigsawPuzzle 
        imageSrc={imageSrc}
        rows={2}
        columns={2}
        onPieceDrag={handlePieceDrag}
        onPuzzleSolved={handlePuzzleSolved}
      >
      </JigsawPuzzle>
    </div>
  );
}

export default MyJigsawPuzzle;

// {puzzlePieces.map((piece) => (
//   <JigsawPiece
//     key={piece.id}
//     id={piece.id}
//     imageSrc={piece.imageSrc}
//     initialPosition={piece.position}
//   />
// ))}

