'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Bac_dao_tao extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Bac_dao_tao.hasOne(models.Dao_tao, { foreignKey: 'fkMaBac' })
        }
    };
    Bac_dao_tao.init({
        tenBac: DataTypes.STRING(200),
        thoiGianToiDa: DataTypes.FLOAT,
        giaHan: DataTypes.FLOAT
    }, {
        sequelize,
        modelName: 'Bac_dao_tao',
    });
    return Bac_dao_tao;
};