'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class DM_Hinh_Thuc_BD extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            DM_Hinh_Thuc_BD.hasOne(models.Boi_duong, { foreignKey: 'fkMaHinhThucBD' })
        }
    };
    DM_Hinh_Thuc_BD.init({
        tenHinhThuc: DataTypes.STRING(200),
        tuVietTat: DataTypes.STRING(20)
    }, {
        sequelize,
        modelName: 'DM_Hinh_Thuc_BD',
    });
    return DM_Hinh_Thuc_BD;
};