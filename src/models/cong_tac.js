'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Cong_tac extends Model {
    };
    Cong_tac.init({
        thoiGianCT: DataTypes.STRING(40),
        chucDanh: DataTypes.STRING(100),
        chucVu: DataTypes.STRING(100),
        donViCT: DataTypes.STRING(100),
        chuyenMon: DataTypes.STRING(1000),
        fkMaCanBo: DataTypes.STRING(6),
    }, {
        sequelize,
        modelName: 'Cong_tac',
    });
    return Cong_tac;
};