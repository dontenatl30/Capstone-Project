import React, { useState } from 'react';
import './DifficultySelector.css';
import { Navbar } from './Nav';
import MyJigsawPuzzle from './JigsawPuzzle';

function DifficultySelector({ onSelectDifficulty }) {
  const [difficulty, setDifficulty] = useState('medium');

  const handleDifficultyChange = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
    onSelectDifficulty(selectedDifficulty);
  };

  let rows, columns;
  if (difficulty === 'easy') {
    rows = 2;
    columns = 2;
  } else if (difficulty === 'medium') {
    rows = 4;
    columns = 6;
  } else if (difficulty === 'hard') {
    rows = 8;
    columns = 8;
  }

  return (
    <>
      <Navbar />
      <h1>Choose Your Difficulty</h1>
      <br></br>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div
              className={`difficulty-tile easy-tile ${difficulty === 'easy' ? 'selected' : ''}`}
              onClick={() => handleDifficultyChange('easy')}
            >
              <h3>Easy</h3>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className={`difficulty-tile medium-tile ${difficulty === 'medium' ? 'selected' : ''}`}
              onClick={() => handleDifficultyChange('medium')}
            >
              <h3>Medium</h3>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className={`difficulty-tile hard-tile ${difficulty === 'hard' ? 'selected' : ''}`}
              onClick={() => handleDifficultyChange('hard')}
            >
              <h3>Hard</h3>
            </div>
          </div>
        </div>
      </div>
      <MyJigsawPuzzle
        selectedDifficulty={difficulty}
        rows={rows}
        columns={columns}
        onSolved={() => alert('Solved!')}
      />
    </>
  );
}

export default DifficultySelector;








