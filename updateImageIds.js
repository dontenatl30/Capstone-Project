// updateImageIds.js

const { Puzzle } = require('./models');

// Assuming you have logic to assign imageId values based on existing data
const updateImageIds = async () => {
  try {
    const puzzles = await Puzzle.findAll({ where: { imageId: null } });

    for (const puzzle of puzzles) {
      // Your logic to assign imageId based on existing data
      const imageId = /* Your logic here */;

      // Update the puzzle record with the assigned imageId
      await puzzle.update({ imageId });
    }

    console.log('ImageIds updated successfully.');
  } catch (error) {
    console.error('Error updating ImageIds:', error);
  }
};

updateImageIds();
