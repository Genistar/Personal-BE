'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Loai_can_bo extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Loai_can_bo.hasOne(models.Can_bo_giang_day, { foreignKey: 'fk_loai_can_bo' })
        }
    };
    Loai_can_bo.init({
        ten_loai_can_bo: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Loai_can_bo',
    });
    return Loai_can_bo;
};