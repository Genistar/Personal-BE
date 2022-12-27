'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class DM_dan_toc extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            DM_dan_toc.hasOne(models.Can_bo_giang_day, { foreignKey: 'fk_ma_dan_toc' })
        }
    };
    DM_dan_toc.init({
        ten_dan_toc: DataTypes.STRING,
        ghichu: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'DM_dan_toc',
    });
    return DM_dan_toc;
};