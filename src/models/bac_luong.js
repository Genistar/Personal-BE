'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Bac_luong extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Bac_luong.hasOne(models.Hop_dong_lao_dong, { foreignKey: 'fkIdBac' })
        }
    };
    Bac_luong.init({
        heSoLuong: DataTypes.FLOAT,
        ngayBatDauHieuLuc: DataTypes.DATE,
        ngayHetHieuLuc: DataTypes.DATE,
        fkIdNgach: DataTypes.STRING(6),
        fkIdNhom: DataTypes.STRING(2),
    }, {
        sequelize,
        modelName: 'Bac_luong',
    });
    return Bac_luong;
};