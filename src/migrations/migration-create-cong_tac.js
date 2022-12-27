'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Cong_tacs', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER,
                autoIncrement: true,
            },
            thoiGianCT: {
                type: Sequelize.STRING(40)
            },
            chucDanh: {
                type: Sequelize.STRING(100)
            },
            chucVu:
            {
                type: Sequelize.STRING(100)
            },
            donViCT: {
                type: Sequelize.STRING(100)
            },
            chuyenMon: {
                type: Sequelize.STRING(1000)
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
        await queryInterface.dropTable('Cong_tacs');
    }
};