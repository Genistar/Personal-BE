'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Hop_dong_lao_dongs', {
            id: {
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.INTEGER
            },
            benA: {
                type: Sequelize.STRING(6)
            },
            benAQuocTich: {
                type: Sequelize.STRING(100)
            },
            benAChucVu: {
                type: Sequelize.STRING(200)
            },
            benADienThoai: {
                type: Sequelize.STRING(200)
            },
            benADaiDienCho: {
                type: Sequelize.STRING(200)
            },
            BenB: {
                type: Sequelize.STRING(6)
            },
            ngheNghiep: {
                type: Sequelize.STRING(200)
            },
            fkMaLoaiHD: {
                type: Sequelize.STRING(2)
            },
            hdTuNgay: {
                type: Sequelize.DATE
            },
            hdDenNgay: {
                type: Sequelize.DATE
            },
            hdFkMaBoMon: {
                type: Sequelize.INTEGER
            },
            chucDanhChuyenMon: {
                type: Sequelize.STRING(100)
            },
            fkMaChucVu: {
                type: Sequelize.STRING(3)
            },
            cvPhaiLam: {
                type: Sequelize.STRING(200)
            },
            thoiGianLamViec: {
                type: Sequelize.STRING(200)
            },
            dCuLamViecCapPhat: {
                type: Sequelize.STRING(200)
            },
            phuongTienDiLai: {
                type: Sequelize.STRING(200)
            },
            fkIdNgach: {
                type: Sequelize.STRING(6)
            },
            fkIdBac: {
                type: Sequelize.INTEGER
            },
            heSoLuong: {
                type: Sequelize.INTEGER
            },
            hinhThucTraLuong: {
                type: Sequelize.STRING(200)
            },
            phuCapGom: {
                type: Sequelize.STRING(200)
            },
            thoiGianTraLuong: {
                type: Sequelize.STRING(100)
            },
            tienThuong: {
                type: Sequelize.STRING(100)
            },
            cheDoNangLuong: {
                type: Sequelize.STRING(100)
            },
            baoHoLDong: {
                type: Sequelize.STRING(200)
            },
            cheDoNghiNgoio: {
                type: Sequelize.STRING(200)
            },
            bhxhbhyt: {
                type: Sequelize.STRING(200)
            },
            cheDoDaoTao: {
                type: Sequelize.STRING(200)
            },
            quyenLoiDuocHuong: {
                type: Sequelize.STRING(200)
            },
            nhungThoaThuanKhac: {
                type: Sequelize.STRING(200)
            },
            boiThuong: {
                type: Sequelize.STRING(200)
            },
            hDLDLamTai: {
                type: Sequelize.STRING(200)
            },
            ghiChu: {
                type: Sequelize.STRING(200)
            },
            ngayKy: {
                type: Sequelize.DATE
            },
            thuViecTuNgay: {
                type: Sequelize.DATE
            },
            thuViecDenNgay: {
                type: Sequelize.DATE
            },
            c85PhanTram: {
                type: Sequelize.INTEGER
            },
            soHopDong: {
                type: Sequelize.STRING(10)
            },
            noiDangKyBHYT: {
                type: Sequelize.STRING(200)
            },
            heSoLuongIn: {
                type: Sequelize.STRING(200)
            },
            canCu1: {
                type: Sequelize.STRING(200)
            },
            canCu2: {
                type: Sequelize.STRING(200)
            },
            huongKhoanThuong: {
                type: Sequelize.STRING(200)
            },
            bhytHDLV: {
                type: Sequelize.STRING(200)
            },
            donViLamViecIn: {
                type: Sequelize.STRING(200)
            },
            giaHan: {
                type: Sequelize.BOOLEAN
            },
            fkMaCanBo: {
                type: Sequelize.STRING(6)
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Hop_dong_lao_dongs');
    }
};