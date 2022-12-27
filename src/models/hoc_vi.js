'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Hoc_vi extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Hoc_vi.hasOne(models.Can_bo_giang_day, { foreignKey: 'ma_hoc_vi' })
        }
    };
    Hoc_vi.init({
        ten: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Hoc_vi',
    });
    return Hoc_vi;
};