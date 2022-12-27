'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Hop_dong_lao_dong extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Hop_dong_lao_dong.belongsTo(models.Loai_hop_dong, { foreignKey: 'fkMaLoaiHD' })
            Hop_dong_lao_dong.belongsTo(models.Ngach_cong_chuc, { foreignKey: 'fkIdNgach' })
            Hop_dong_lao_dong.belongsTo(models.Chuc_vu, { foreignKey: 'fkMaChucVu' })
            Hop_dong_lao_dong.belongsTo(models.Bo_mon, { foreignKey: 'hdFkMaBoMon' })
            Hop_dong_lao_dong.belongsTo(models.Bac_luong, { foreignKey: 'fkIdBac' })
            Hop_dong_lao_dong.belongsTo(models.Can_bo_giang_day, { foreignKey: 'BenB' })
        }
    };
    Hop_dong_lao_dong.init({
        benA:
            DataTypes.STRING(6)
        ,
        benAQuocTich:
            DataTypes.STRING(100)
        ,
        benAChucVu:
            DataTypes.STRING(200)
        ,
        benADienThoai:
            DataTypes.STRING(200)
        ,
        benADaiDienCho:
            DataTypes.STRING(200)
        ,
        BenB:
            DataTypes.STRING(6)
        ,
        ngheNghiep:
            DataTypes.STRING(200)
        ,
        fkMaLoaiHD:
            DataTypes.STRING(2)
        ,
        hdTuNgay:
            DataTypes.DATE
        ,
        hdDenNgay:
            DataTypes.DATE
        ,
        hdFkMaBoMon:
            DataTypes.INTEGER
        ,
        chucDanhChuyenMon:
            DataTypes.STRING(100)
        ,
        fkMaChucVu:
            DataTypes.STRING(3)
        ,
        cvPhaiLam:
            DataTypes.STRING(200)
        ,
        thoiGianLamViec:
            DataTypes.STRING(200)
        ,
        dCuLamViecCapPhat:
            DataTypes.STRING(200)
        ,
        phuongTienDiLai:
            DataTypes.STRING(200)
        ,
        fkIdNgach:
            DataTypes.STRING(6)
        ,
        fkIdBac:
            DataTypes.INTEGER
        ,
        heSoLuong:
            DataTypes.INTEGER
        ,
        hinhThucTraLuong:
            DataTypes.STRING(200)
        ,
        phuCapGom:
            DataTypes.STRING(200)
        ,
        thoiGianTraLuong:
            DataTypes.STRING(100)
        ,
        tienThuong:
            DataTypes.STRING(100)
        ,
        cheDoNangLuong:
            DataTypes.STRING(100)
        ,
        baoHoLDong:
            DataTypes.STRING(200)
        ,
        cheDoNghiNgoio:
            DataTypes.STRING(200)
        ,
        bhxhbhyt:
            DataTypes.STRING(200)
        ,
        cheDoDaoTao:
            DataTypes.STRING(200)
        ,
        quyenLoiDuocHuong:
            DataTypes.STRING(200)
        ,
        nhungThoaThuanKhac:
            DataTypes.STRING(200)
        ,
        boiThuong:
            DataTypes.STRING(200)
        ,
        hDLDLamTai:
            DataTypes.STRING(200)
        ,
        ghiChu:
            DataTypes.STRING(200)
        ,
        ngayKy:
            DataTypes.DATE
        ,
        thuViecTuNgay:
            DataTypes.DATE
        ,
        thuViecDenNgay:
            DataTypes.DATE
        ,
        c85PhanTram:
            DataTypes.INTEGER
        ,
        soHopDong:
            DataTypes.STRING(10)
        ,
        noiDangKyBHYT:
            DataTypes.STRING(200)
        ,
        heSoLuongIn:
            DataTypes.STRING(200)
        ,
        canCu1:
            DataTypes.STRING(200)
        ,
        canCu2:
            DataTypes.STRING(200)
        ,
        huongKhoanThuong:
            DataTypes.STRING(200)
        ,
        bhytHDLV:
            DataTypes.STRING(200)
        ,
        donViLamViecIn:
            DataTypes.STRING(200)
        ,
        giaHan: DataTypes.BOOLEAN
        ,
        fkMaCanBo: DataTypes.STRING(6)
    }, {
        sequelize,
        modelName: 'Hop_dong_lao_dong',
    });
    return Hop_dong_lao_dong;
};