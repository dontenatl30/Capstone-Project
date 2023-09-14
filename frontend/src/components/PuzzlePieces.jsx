// import React, { useEffect } from 'react';
// import Phaser from 'phaser';
// const PuzzlePiece = ({ x, y, image }) => {
//   useEffect(() => {
//     // Create a Phaser game instance
//     const config = {
//       type: Phaser.AUTO,
//       width: 800,
//       height: 600,
//       scene: {
//         preload: preload,
//         create: create,
//       },
//     };
//     const game = new Phaser.Game(config);
//     function preload() {
//       // Load the puzzle piece image
//       this.load.image('piece', image);
//     }
//     function create() {
//       // Add the puzzle piece as a draggable sprite
//       const piece = this.add.sprite(x, y, 'piece');
//       // Make the puzzle piece interactive and draggable
//       piece.setInteractive();
//       this.input.setDraggable(piece);
//       // Set up event listeners for drag-and-drop
//       this.input.on('dragstart', (pointer, gameObject) => {
//         gameObject.setTint(0xff0000);
//       });
//       this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
//         gameObject.x = dragX;
//         gameObject.y = dragY;
//       });
//       this.input.on('dragend', (pointer, gameObject) => {
//         gameObject.clearTint();
//       });
//     }
//     return () => {
//       // Clean up the game instance when the component unmounts
//       game.destroy(true);
//     };
//   }, [x, y, image]);
//   return null; // Return null, as rendering is handled by Phaser
// };
// export default PuzzlePiece;







