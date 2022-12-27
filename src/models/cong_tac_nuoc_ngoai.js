'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Cong_tac_nuoc_ngoai extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
    };
    Cong_tac_nuoc_ngoai.init({
        fkMaCanBo: DataTypes.STRING(6),
        ngayDi: DataTypes.DATE,
        ngayVe: DataTypes.DATE,
        quocGia: DataTypes.STRING(40),
        noiden: DataTypes.STRING(100),
        soPassport: DataTypes.STRING(20),
        nganhHoc: DataTypes.STRING(1000),
        chiPhiCT: DataTypes.FLOAT,
        phanTramHuongLuong: DataTypes.FLOAT,
    }, {
        sequelize,
        modelName: 'Cong_tac_nuoc_ngoai',
    });
    return Cong_tac_nuoc_ngoai;
};