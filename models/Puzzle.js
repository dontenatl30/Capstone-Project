'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Puzzle extends Model {
    static associate(models) {
        Puzzle.belongsToMany(models.User, {
            through: models.FavoritePuzzle,
            foreignKey: 'puzzleId',
            otherKey: 'userId',
        });
    }
  }
  Puzzle.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    puzzleTheme: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING, // You might want to use DataTypes.TEXT if storing a large amount of data
      allowNull: false,
    },
    timeToComplete: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Puzzle', // Change the model name to 'Puzzle'
    tableName: 'puzzles', // You can set a custom table name here if needed
  });
  return Puzzle;
};