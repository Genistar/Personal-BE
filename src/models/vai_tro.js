'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Vai_tro extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Vai_tro.hasOne(models.User, { foreignKey: 'role', hooks: true })
        }
    };
    Vai_tro.init({
        tenVaiTro: DataTypes.STRING(100),
        chucNang: DataTypes.STRING(500),
    }, {
        sequelize,
        modelName: 'Vai_tro',
    });
    return Vai_tro;
};