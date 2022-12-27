'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Dairy extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Dairy.belongsTo(models.Can_bo_giang_day, { foreignKey: 'fkMaCanBo' })
        }
    };
    Dairy.init({
        ten_hoat_dong: DataTypes.STRING(200),
        fkMaCanBo: DataTypes.STRING(6),
        noiDung: DataTypes.STRING(200)
    }, {
        sequelize,
        modelName: 'Dairy',
    });
    return Dairy;
};