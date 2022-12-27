'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Dao_tao extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Dao_tao.belongsTo(models.Bac_dao_tao, { foreignKey: 'fkMaBac' })
            Dao_tao.belongsTo(models.DM_he_dao_tao, { foreignKey: 'fkMaHeDaoTao' })
        }
    };
    Dao_tao.init({
        fkMaBac: DataTypes.STRING(3),
        fkMaHeDaoTao: DataTypes.STRING(2),
        fkMaCanBo: DataTypes.STRING(6),
        nganhDaoTao: DataTypes.STRING(100),
        noiDaoTao: DataTypes.STRING(1000),
        quocGia: DataTypes.STRING(100),
        tenLuanAn: DataTypes.STRING(200),
        thoiGianBD: DataTypes.DATE,
        thoiGianKT: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Dao_tao',
    });
    return Dao_tao;
};