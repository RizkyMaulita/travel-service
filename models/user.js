'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../utils/encryption')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsTo(models.Role, {
        foreignKey: 'roleId',
        targetKey: 'id'
      })
    }
  };
  User.init({
    fullName: DataTypes.STRING,
    userName: {
      type: DataTypes.STRING,
      validate: {
        is: {
          args: /^\S+$/,
          msg: `Username can't contain whitespace`
        },
        notEmpty: {
          msg: `Username can't be empty`
        }
      },
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: `Wrong email format`
        }
      },
      unique: true
    },
    password: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    roleId: DataTypes.INTEGER
  }, {
    sequelize,
    hooks: {
      beforeCreate(model) {
        if (model.password) {
          model.password = hashPassword(model.password)
        }
        if (!model.roleId) {
          model.roleId = 3
        }
      }
    },
    modelName: 'User',
  });
  return User;
};