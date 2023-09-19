import React, { useState, useEffect } from 'react';
import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib';
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css';

function MyJigsawPuzzle({
  selectedTheme,
  randomImageFileName,
  selectedDifficulty,
  onSolved,
  setSolvedRiddle,
  solvedRiddle,  
}) {
  const [timer, setTimer] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showRiddleModal, setShowRiddleModal] = useState(false);
  const [riddle, setRiddle] = useState(null); 

  const revealAnswer = () => {
    setShowAnswer(true);
  };

  useEffect(() => {
    let interval;

    if (startTime && !onSolved) {
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
  }, [startTime, onSolved]);

  const fetchRiddleData = async (theme) => {
    const url = 'https://riddles-by-api-ninjas.p.rapidapi.com/v1/riddles';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '24fff37d96mshab781704e4591b5p152682jsn5b1954a02c9e',
        'X-RapidAPI-Host': 'riddles-by-api-ninjas.p.rapidapi.com',
      },
    };

    try {
      console.log('Fetching riddle data...');
      const response = await fetch(url, options);
      const result = await response.json();
      console.log('Fetched riddle data:', result);

      if (Array.isArray(result) && result.length > 0) {
        setSolvedRiddle(result[0]);
        setRiddle(result[0]); 
      } else {
        console.warn('No riddles found in the response.');
      }
    } catch (error) {
      console.error('Error fetching riddle data:', error);
    }
  };

  const handlePuzzleSolved = async () => {
    console.log('Puzzle solved! Fetching riddle data...');
    try {
      await fetchRiddleData(selectedTheme);
      setShowRiddleModal(true); 
    } catch (error) {
      console.error('Error fetching riddle data:', error);
    }
  };

  const closeRiddleModal = () => {
    setShowRiddleModal(false);
  };

  return (
    <div>
      {randomImageFileName && (
        <div>
          <img
            src={randomImageFileName}
            alt={`Random Image`}
            className="random-image"
            style={{ maxWidth: '100%' }}
          />
          <JigsawPuzzle
            imageSrc={randomImageFileName}
            rows={selectedDifficulty === 'easy' ? 2 : selectedDifficulty === 'medium' ? 4 : 8}
            columns={selectedDifficulty === 'easy' ? 2 : selectedDifficulty === 'medium' ? 6 : 8}
            onSolved={() => handlePuzzleSolved()}
          />
        </div>
      )}

      {showRiddleModal && (
        <div className="riddle-modal">
          <div className="riddle-modal-content">
            <h2>Riddle:</h2>
            <p style={{ fontWeight: 'bold', color: 'black' }}>
              {riddle ? riddle.question : 'Loading riddle...'}
            </p>
            <h3>Answer:</h3>
            <p style={{ fontWeight: 'bold', color: 'black' }}>
            {showAnswer ? (riddle ? riddle.answer : 'Loading answer...') : ''}
            </p>
            {!showAnswer && <button onClick={revealAnswer}>Reveal Answer</button>}
            <button onClick={closeRiddleModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyJigsawPuzzle;

// import React, { useState, useEffect } from 'react';
// import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib';
// import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css';

// function MyJigsawPuzzle({
//   selectedTheme,
//   randomImageFileName,
//   selectedDifficulty,
//   onSolved,
//   setSolvedRiddle,
//   solvedRiddle,
// }) {
//   const [timer, setTimer] = useState(0);
//   const [startTime, setStartTime] = useState(null);
//   const [showAnswer, setShowAnswer] = useState(false);
//   const [showRiddleModal, setShowRiddleModal] = useState(false);
//   const [riddle, setRiddle] = useState(null);

//   const revealAnswer = () => {
//     setShowAnswer(true);
//   };

//   useEffect(() => {
//     let interval;

//     if (startTime && !onSolved) {
//       interval = setInterval(() => {
//         const currentTime = new Date();
//         const elapsedTime = Math.floor((currentTime - startTime) / 1000);
//         setTimer(elapsedTime);
//       }, 1000);
//     } else {
//       clearInterval(interval);
//     }

//     return () => {
//       clearInterval(interval);
//     };
//   }, [startTime, onSolved]);

//   const fetchRiddleData = async (theme) => {
//     const url = 'https://riddles-by-api-ninjas.p.rapidapi.com/v1/riddles';
//     const options = {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': '24fff37d96mshab781704e4591b5p152682jsn5b1954a02c9e',
//         'X-RapidAPI-Host': 'riddles-by-api-ninjas.p.rapidapi.com',
//       },
//     };

//     try {
//       console.log('Fetching riddle data...');
//       const response = await fetch(url, options);
//       const result = await response.json();
//       console.log('Fetched riddle data:', result);

//       if (Array.isArray(result) && result.length > 0) {
//         setSolvedRiddle(result[0]);
//         setRiddle(result[0]);
//       } else {
//         console.warn('No riddles found in the response.');
//       }
//     } catch (error) {
//       console.error('Error fetching riddle data:', error);
//     }
//   };

//   const handlePuzzleSolved = async () => {
//     console.log('Puzzle solved! Fetching riddle data...');
//     try {
//       await fetchRiddleData(selectedTheme);
//       setShowRiddleModal(true);
//     } catch (error) {
//       console.error('Error fetching riddle data:', error);
//     }
//   };

//   const closeRiddleModal = () => {
//     setShowRiddleModal(false);
//   };

//   return (
//     <div>
//       {randomImageFileName && (
//         <div>
//           <img
//             src={randomImageFileName}
//             alt={`Random Image`}
//             className="random-image"
//             style={{ maxWidth: '100%' }}
//           />
//           <JigsawPuzzle
//             imageSrc={randomImageFileName}
//             rows={selectedDifficulty === 'easy' ? 2 : selectedDifficulty === 'medium' ? 4 : 8}
//             columns={selectedDifficulty === 'easy' ? 2 : selectedDifficulty === 'medium' ? 6 : 8}
//             onSolved={() => handlePuzzleSolved()}
//           />
//         </div>
//       )}

//       {showRiddleModal && (
//         <div className="riddle-modal">
//           <div className="riddle-modal-content">
//             <h2>Riddle:</h2>
//             <p style={{ fontWeight: 'bold', color: 'black' }}>
//               {riddle ? riddle.question : 'Loading riddle...'}
//             </p>
//             <h3>Answer:</h3>
//             <p style={{ fontWeight: 'bold', color: 'black' }}>
//               {showAnswer ? (riddle ? riddle.answer : 'Loading answer...') : ''}
//             </p>
//             {!showAnswer && <button onClick={revealAnswer}>Reveal Answer</button>}
//             <button onClick={closeRiddleModal}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default MyJigsawPuzzle;



