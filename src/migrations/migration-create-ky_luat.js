'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Ky_luats', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER,
                autoIncrement: true,
            },
            namBiKyLuat: {
                type: Sequelize.STRING(4)
            },
            namXoaHieuLucKyLuat: {
                type: Sequelize.STRING(4)
            },
            fkMaKyLuat:
            {
                type: Sequelize.STRING(2)
            },
            coQuan: {
                type: Sequelize.STRING(1000)
            },
            coQuanKhac: {
                type: Sequelize.STRING(1000)
            },
            ghiChu: {
                type: Sequelize.STRING(1000)
            },
            fkMaCanBo: {
                type: Sequelize.STRING(6)
            },
            soThangBiKyLuat: {
                type: Sequelize.INTEGER
            },
            soCongVan: {
                type: Sequelize.INTEGER
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
        await queryInterface.dropTable('Ky_luats');
    }
};