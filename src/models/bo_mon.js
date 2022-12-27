'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Bo_mon extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Bo_mon.hasOne(models.Can_bo_giang_day, { foreignKey: 'ma_bo_mon' })
            Bo_mon.hasOne(models.Hop_dong_lao_dong, { foreignKey: 'hdFkMaBoMon' })
        }
    };
    Bo_mon.init({
        bomonId: DataTypes.STRING(10),
        ten_bo_mon: DataTypes.STRING,
        ma_khoa: DataTypes.STRING(10),
        ma_bo_mon_truong: DataTypes.STRING(10),
        xoa: DataTypes.INTEGER,
        cap_khoa: DataTypes.STRING(2),
    }, {
        sequelize,
        modelName: 'Bo_mon',
    });
    return Bo_mon;
};