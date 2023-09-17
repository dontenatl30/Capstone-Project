'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Remove the 'name' column
    await queryInterface.removeColumn('Puzzles', 'name');

    // Rename 'puzzleTheme' column to 'theme'
    await queryInterface.renameColumn('Puzzles', 'puzzleTheme', 'theme');
  },

  down: async (queryInterface, Sequelize) => {
    // Add the 'name' column back
    await queryInterface.addColumn('Puzzles', 'name', {
      type: Sequelize.STRING,
      allowNull: false,
    });

    // Rename 'theme' column back to 'puzzleTheme'
    await queryInterface.renameColumn('Puzzles', 'theme', 'puzzleTheme');
  },
};