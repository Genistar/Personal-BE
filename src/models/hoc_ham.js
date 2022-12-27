'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Hoc_ham extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Hoc_ham.hasOne(models.Can_bo_giang_day, { foreignKey: 'ma_hoc_ham' })
        }
    };
    Hoc_ham.init({
        ten: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Hoc_ham',
    });
    return Hoc_ham;
};