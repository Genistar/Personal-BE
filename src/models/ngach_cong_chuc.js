'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Ngach_cong_chuc extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Ngach_cong_chuc.hasOne(models.Hop_dong_lao_dong, { foreignKey: 'fkIdNgach' })
        }
    };
    Ngach_cong_chuc.init({
        maSoNgach:
            DataTypes.STRING(10)
        ,
        nhom:
            DataTypes.STRING(2)
        ,
        tenNgach:
            DataTypes.STRING(200)
        ,
        soNamNangBac:
            DataTypes.INTEGER
        ,
        tuVietTat:
            DataTypes.STRING(20)
        ,
        thuTuUuTien:
            DataTypes.INTEGER
        ,
    }, {
        sequelize,
        modelName: 'Ngach_cong_chuc',
    });
    return Ngach_cong_chuc;
};