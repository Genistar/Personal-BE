'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Nganh extends Model {
        static associate(models) {
            Nganh.hasOne(models.Can_bo_giang_day, { foreignKey: 'fk_nganh' })
        }
    };
    Nganh.init({
        ten_nganh: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Nganh',
    });
    return Nganh;
};