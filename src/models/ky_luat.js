'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Ky_luat extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Ky_luat.belongsTo(models.DM_ky_luat, { foreignKey: 'fkMaKyLuat' })
        }
    };
    Ky_luat.init({
        namBiKyLuat: DataTypes.STRING(4),
        namXoaHieuLucKyLuat: DataTypes.STRING(4),
        fkMaKyLuat: DataTypes.STRING(2),
        coQuan: DataTypes.STRING(1000),
        coQuanKhac: DataTypes.STRING(1000),
        ghiChu: DataTypes.STRING(1000),
        fkMaCanBo: DataTypes.STRING(6),
        soThangBiKyLuat: DataTypes.INTEGER,
        soCongVan: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Ky_luat',
    });
    return Ky_luat;
};