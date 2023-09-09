
// function MyJigsawPuzzle() {
//   // Define your puzzle image and piece size
//   const imageUrl = 'path/to/your/puzzle-image.jpg';
//   const pieceSize = { width: 100, height: 100 };

//   return (
//     <div>
//       <h1>Jigsaw Puzzle</h1>
//       <JigsawPuzzle
//         image={imageUrl}
//         pieceSize={pieceSize}
//         numRows={3} // Number of rows in the puzzle grid
//         numCols={3} // Number of columns in the puzzle grid
//         onSolve={() => alert('Puzzle solved!')} // Callback when the puzzle is solved
//       />
//     </div>
//   );
// }

// export default MyJigsawPuzzle;

import React, { useEffect } from 'react';
import * as PIXI from 'pixi.js';

const MyPixiComponent = () => {
  useEffect(() => {
    // Create a PixiJS Application
    const app = new PIXI.Application({ width: 800, height: 600 });
    
    // Add the PixiJS canvas to your React component
    const canvasContainer = document.getElementById('canvas-container');
    canvasContainer.appendChild(app.view);

    // Create PixiJS graphics
    const graphics = new PIXI.Graphics();
    graphics.beginFill(0xFF0000);
    graphics.drawRect(0, 0, 200, 100);
    graphics.endFill();

    // Add the graphics to the stage
    app.stage.addChild(graphics);
  }, []);

  return <div id="canvas-container"></div>;
};

export default MyPixiComponent;


