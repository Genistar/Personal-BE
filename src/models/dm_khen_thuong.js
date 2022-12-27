'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class DM_khen_thuong extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            DM_khen_thuong.hasOne(models.Khen_thuong, { foreignKey: 'fkMaKhenThuong' })
        }
    };
    DM_khen_thuong.init({
        tenKhenThuong: DataTypes.STRING(500),
        tenVietTat: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'DM_khen_thuong',
    });
    return DM_khen_thuong;
};