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
    theme: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING, // You might want to use DataTypes.TEXT if storing a large amount of data
    },
  }, {
    sequelize,
    modelName: 'Puzzle', // Change the model name to 'Puzzle'
  });
  return Puzzle;
};