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
      type: DataTypes.TEXT,
    },
    imageId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
  }, {
    sequelize,
    modelName: 'Puzzle',
  });
  return Puzzle;
};