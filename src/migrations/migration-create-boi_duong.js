'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Boi_duongs', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER,
                autoIncrement: true,
            },
            noiBoiDuong: {
                type: Sequelize.STRING(200)
            },
            boiDuongTuNgay: {
                type: Sequelize.DATE
            },
            boiDuongDenNgay:
            {
                type: Sequelize.DATE
            },
            noiDungBoiDuong: {
                type: Sequelize.STRING(1000)
            },
            fkMaHinhThucBD: {
                type: Sequelize.STRING(2)
            },
            chungChiBoiDuong: {
                type: Sequelize.STRING(200)
            },
            fkMaCanBo: {
                type: Sequelize.STRING(6)
            },
            ghiChu: {
                type: Sequelize.STRING(1000)
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
        await queryInterface.dropTable('Boi_duongs');
    }
};