import React from 'react';
import './DifficultySelector.css'; // Import your CSS file for styling

function DifficultySelector({ selectedDifficulty, onDifficultySelect }) {
  return (
    <>
    <div className="difficulty-selector">
      <div
        className={`difficulty-option ${
          selectedDifficulty === 'Easy' ? 'selected' : ''
        }`}
        onClick={() => onDifficultySelect('Easy')}
      >
        Easy
      </div>
      <div
        className={`difficulty-option ${
          selectedDifficulty === 'Medium' ? 'selected' : ''
        }`}
        onClick={() => onDifficultySelect('Medium')}
      >
        Medium
      </div>
      <div
        className={`difficulty-option ${
          selectedDifficulty === 'Hard' ? 'selected' : ''
        }`}
        onClick={() => onDifficultySelect('Hard')}
      >
        Hard
    
      </div>
    </div>

    </>
  );
}

export default DifficultySelector;
