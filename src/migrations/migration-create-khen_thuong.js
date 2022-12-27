'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Khen_thuongs', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER,
                autoIncrement: true,
            },
            namKhenThuong: {
                type: Sequelize.STRING(4)
            },
            fkMaKhenThuong: {
                type: Sequelize.STRING(3)
            },
            hinhThucKhenThuongKhac:
            {
                type: Sequelize.STRING(1000)
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
        await queryInterface.dropTable('Khen_thuongs');
    }
};