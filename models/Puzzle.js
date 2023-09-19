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
      type: DataTypes.TEXT, // You might want to use DataTypes.TEXT if storing a large amount of data
    },
    imageId: {
      type: DataTypes.UUID, // Use DataTypes.UUID for unique identifiers
      defaultValue: DataTypes.UUIDV4, // Generate UUIDs by default
      allowNull: false, // Ensure imageId is always provided
      primaryKey: true, // Make imageId the primary key
      unique: true, // Ensure imageId values are unique
    },
  }, {
    sequelize,
    modelName: 'Puzzle', // Change the model name to 'Puzzle'
  });
  return Puzzle;
};