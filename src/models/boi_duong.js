'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Boi_duong extends Model {
        static associate(models) {
            Boi_duong.belongsTo(models.DM_Hinh_Thuc_BD, { foreignKey: 'fkMaHinhThucBD' });
            Boi_duong.belongsTo(models.Can_bo_giang_day, { foreignKey: 'fkMaCanBo' });
        }
    };
    Boi_duong.init({
        noiBoiDuong: DataTypes.STRING(200),
        boiDuongTuNgay: DataTypes.DATE,
        boiDuongDenNgay: DataTypes.DATE,
        noiDungBoiDuong: DataTypes.STRING(1000),
        fkMaHinhThucBD: DataTypes.STRING(2),
        chungChiBoiDuong: DataTypes.STRING(200),
        fkMaCanBo: DataTypes.STRING(6),
        ghiChu: DataTypes.STRING(1000),
    }, {
        sequelize,
        modelName: 'Boi_duong',
    });
    return Boi_duong;
};