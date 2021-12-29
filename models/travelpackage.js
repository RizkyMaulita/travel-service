'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TravelPackage extends Model {
    static associate(models) {
      TravelPackage.belongsTo(models.Type, {
        foreignKey: 'typeId',
        targetKey: 'id'
      })
    }
  };
  TravelPackage.init({
    title: DataTypes.STRING,
    about: DataTypes.STRING,
    slug: DataTypes.STRING,
    location: DataTypes.STRING,
    meet_point: DataTypes.STRING,
    departure_date: DataTypes.STRING,
    duration: DataTypes.STRING,
    price: DataTypes.INTEGER,
    typeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TravelPackage',
  });
  return TravelPackage;
};