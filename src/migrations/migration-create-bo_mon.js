'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Bo_mons', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            bomonId: {
                type: Sequelize.STRING(10)
            },
            ten_bo_mon: {
                type: Sequelize.STRING
            },
            ma_khoa: {
                type: Sequelize.STRING(10)
            },
            ma_bo_mon_truong: {
                type: Sequelize.STRING(10)
            },
            xoa: {
                type: Sequelize.INTEGER
            },
            cap_khoa: {
                type: Sequelize.STRING(2)
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
        await queryInterface.dropTable('Bo_mons');
    }
};