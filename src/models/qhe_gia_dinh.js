'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Qhe_gia_dinh extends Model {

        static associate(models) {
            Qhe_gia_dinh.belongsTo(models.Quan_he, { foreignKey: 'fkMaQuanHe' })
            Qhe_gia_dinh.belongsTo(models.Can_bo_giang_day, { foreignKey: 'fkMaCanBo' })
        }
    };
    Qhe_gia_dinh.init({
        hovaten:
            DataTypes.STRING(100)
        ,
        namSinh:
            DataTypes.INTEGER
        ,
        queQuan:
            DataTypes.STRING(200)
        ,
        ngheNghiep:
            DataTypes.STRING(200)
        ,
        donViCongTacHocTap:
            DataTypes.STRING(200)
        ,
        noiO:
            DataTypes.STRING(200)
        ,
        fkMaQuanHe:
            DataTypes.STRING(2)
        ,
        fkMaCanBo:
            DataTypes.STRING(6)
        ,
    }, {
        sequelize,
        modelName: 'Qhe_gia_dinh',
    });
    return Qhe_gia_dinh;
};