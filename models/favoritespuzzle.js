// const { Model, DataTypes } = require('sequelize');
// const { User, Puzzle } = require('./index'); 

'use strict';
const models = require('../models')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FavoritePuzzle extends Model {
    static associate(models) {
      // Define associations with User and Puzzle models
      models.Puzzle.belongsToMany(models.User, {
        through: 'FavoritePuzzle',
        foreignKey: 'userId',
        otherKey: 'puzzleId',
        onDelete: 'CASCADE', // Cascade delete if a user is deleted
      });
      models.User.belongsToMany(models.Puzzle, {
        through: 'FavoritePuzzle',
        foreignKey: 'userId',
        otherKey: 'puzzleId',
        onDelete: 'CASCADE', // Cascade delete if a puzzle is deleted
      });
    }
  }
  FavoritePuzzle.init({
    // Additional attributes can be defined here, such as progress and timer status
        progress: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0, // Progress starts at 0, indicating not started
    },
    image: {
      type: DataTypes.STRING, // You might want to use DataTypes.TEXT if storing a large amount of data
    },
    timerStopped: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false, // Timer is not stopped by default
    },
    userID: {
      type: DataTypes.INTEGER,
      references: {
        model: models.User,
        key: "id",
    }},
    puzzleID: {
      type: DataTypes.INTEGER,
      references: {
        model: models.Puzzle,
        key: "id",
    }},
    progress: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0, // Progress starts at 0, indicating not started
    },
    image: {
      type: DataTypes.STRING, // You might want to use DataTypes.TEXT if storing a large amount of data
    },
    timerStopped: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false, // Timer is not stopped by default
    },
  }, {
    sequelize,
    modelName: 'FavoritePuzzle',
    tableName: 'favorite_puzzles', // You can set a custom table name here if needed
  });
  return FavoritePuzzle;
};