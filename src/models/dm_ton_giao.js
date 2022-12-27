'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class DM_ton_giao extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            DM_ton_giao.hasOne(models.Can_bo_giang_day, { foreignKey: 'fk_ma_ton_giao' })
        }
    };
    DM_ton_giao.init({
        ten_ton_giao: DataTypes.STRING,
        ghichu: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'DM_ton_giao',
    });
    return DM_ton_giao;
};