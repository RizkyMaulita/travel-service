'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Type extends Model {
    static associate(models) {
      Type.hasMany(models.TravelPackage, {
        foreignKey: 'typeId',
        sourceKey: 'id'
      })
    }
  };
  Type.init({
    name: DataTypes.STRING,
    min: DataTypes.INTEGER,
    max: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Type',
  });
  return Type;
};