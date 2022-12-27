'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Chuc_vu extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Chuc_vu.hasOne(models.Can_bo_giang_day, { foreignKey: 'fk_chuc_vu' })
            Chuc_vu.hasOne(models.Hop_dong_lao_dong, { foreignKey: 'fkMaChucVu' })
        }
    };
    Chuc_vu.init({
        ten_chuc_vu: DataTypes.STRING(200),
    }, {
        sequelize,
        modelName: 'Chuc_vu',
    });
    return Chuc_vu;
};