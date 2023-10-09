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
      models.Puzzle.belongsToMany(models.User, {
        through: 'FavoritePuzzle',
        foreignKey: 'userId',
        otherKey: 'puzzleId',
        onDelete: 'CASCADE',
      });
      models.User.belongsToMany(models.Puzzle, {
        through: 'FavoritePuzzle',
        foreignKey: 'userId',
        otherKey: 'puzzleId',
        onDelete: 'CASCADE', 
      });
    }
  }
  FavoritePuzzle.init(
    {
    progress: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    timerStopped: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: 'FavoritePuzzle',
    tableName: 'favorite_puzzles',
  });
  return FavoritePuzzle;
};