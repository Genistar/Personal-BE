'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Loai_hop_dong extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Loai_hop_dong.hasOne(models.Hop_dong_lao_dong, { foreignKey: 'fkMaLoaiHD' })
        }
    };
    Loai_hop_dong.init({
        tenLoaiHopDong: DataTypes.STRING(100),
        kyTuVietTat: DataTypes.STRING(20),
        soThang: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Loai_hop_dong',
    });
    return Loai_hop_dong;
};