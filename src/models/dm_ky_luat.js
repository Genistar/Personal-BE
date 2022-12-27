'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class DM_ky_luat extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            DM_ky_luat.hasOne(models.Ky_luat, { foreignKey: 'fkMaKyLuat' })
        }
    };
    DM_ky_luat.init({
        tenKyLuat: DataTypes.STRING(500),
        tenVietTat: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'DM_ky_luat',
    });
    return DM_ky_luat;
};