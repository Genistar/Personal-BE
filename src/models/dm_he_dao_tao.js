'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class DM_he_dao_tao extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            DM_he_dao_tao.hasOne(models.Dao_tao, { foreignKey: 'fkMaHeDaoTao' })
        }
    };
    DM_he_dao_tao.init({
        tenHeDaoTao: DataTypes.STRING(200),
        hienThi: DataTypes.FLOAT
    }, {
        sequelize,
        modelName: 'DM_he_dao_tao',
    });
    return DM_he_dao_tao;
};