'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Can_bo_giang_day, { foreignKey: 'cbId', hooks: true })
    }
  };
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    cbId: DataTypes.STRING(6),
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};