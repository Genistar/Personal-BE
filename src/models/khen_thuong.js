'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Khen_thuong extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Khen_thuong.belongsTo(models.DM_khen_thuong, { foreignKey: 'fkMaKhenThuong' })
        }
    };
    Khen_thuong.init({
        namKhenThuong: DataTypes.STRING,
        fkMaKhenThuong: DataTypes.STRING(3),
        hinhThucKhenThuongKhac: DataTypes.STRING(10),
        coQuan: DataTypes.STRING(1000),
        coQuanKhac: DataTypes.STRING(1000),
        ghiChu: DataTypes.STRING(1000),
        fkMaCanBo: DataTypes.STRING(6),
        soCongVan: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Khen_thuong',
    });
    return Khen_thuong;
};