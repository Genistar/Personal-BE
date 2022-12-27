'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Quan_he extends Model {

        static associate(models) {
            Quan_he.hasOne(models.Qhe_gia_dinh, { foreignKey: 'fkMaQuanHe' })
        }
    };
    Quan_he.init({
        tenQuanHe:
            DataTypes.STRING(200)
        ,
        ghichu:
            DataTypes.STRING(200)
        ,
    }, {
        sequelize,
        modelName: 'Quan_he',
    });
    return Quan_he;
};