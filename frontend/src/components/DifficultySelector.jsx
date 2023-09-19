// import React, { useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom'; // Updated imports

// import './DifficultySelector.css';
// import { Navbar } from './Nav';
// import MyJigsawPuzzle from './JigsawPuzzle';

// function DifficultySelector() {
//   const [difficulty, setDifficulty] = useState('medium');
//   const navigate = useNavigate(); // Updated navigation hook
//   const { selectedDifficulty } = useParams(); // Updated route parameter handling

//   const handleDifficultyChange = (selectedDifficulty) => {
//     setDifficulty(selectedDifficulty);

//     // Use navigate to navigate to a specific route
//     navigate(`/difficulty-selector/${selectedDifficulty}`);
//   };

//   let rows, columns;
//   if (difficulty === 'easy') {
//     rows = 2;
//     columns = 2;
//   } else if (difficulty === 'medium') {
//     rows = 4;
//     columns = 6;
//   } else if (difficulty === 'hard') {
//     rows = 8;
//     columns = 8;
//   }

//   return (
//     <>
//       <Navbar />
//       <h1>Choose Your Difficulty</h1>
//       <br></br>
//       <br></br>
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-4">
//             <div
//               className={`difficulty-tile easy-tile ${difficulty === 'easy' ? 'selected' : ''}`}
//               onClick={() => handleDifficultyChange('easy')}
//             >
//               <h3>Easy</h3>
//             </div>
//           </div>
//           <div className="col-lg-4">
//             <div
//               className={`difficulty-tile medium-tile ${difficulty === 'medium' ? 'selected' : ''}`}
//               onClick={() => handleDifficultyChange('medium')}
//             >
//               <h3>Medium</h3>
//             </div>
//           </div>
//           <div className="col-lg-4">
//             <div
//               className={`difficulty-tile hard-tile ${difficulty === 'hard' ? 'selected' : ''}`}
//               onClick={() => handleDifficultyChange('hard')}
//             >
//               <h3>Hard</h3>
//             </div>
//           </div>
//         </div>
//       </div>
//       <MyJigsawPuzzle
//         selectedDifficulty={selectedDifficulty || difficulty} // Use selectedDifficulty from route parameter
//         rows={rows}
//         columns={columns}
//         onSolved={() => alert('Solved!')}
//       />
//     </>
//   );
// }

// export default DifficultySelector;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DifficultySelector.css';
import { Navbar } from './Nav';
import MyJigsawPuzzle from './JigsawPuzzle';

function DifficultySelector() {
  const [difficulty, setDifficulty] = useState('medium');
  const navigate = useNavigate();

  const handleDifficultyChange = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
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

  const startPuzzle = () => {
    navigate(`/puzzle/${difficulty}`);
  };

  return (
    <>
      <Navbar />
      <h1>Choose Your Difficulty</h1>
      <br />
      <br />
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
      <button onClick={startPuzzle} className="btn btn-primary">
        Start Puzzle
      </button>
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










