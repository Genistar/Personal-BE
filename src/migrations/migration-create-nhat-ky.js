'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('dairies', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER,
                autoIncrement: true,
            },
            ten_hoat_dong: {
                type: Sequelize.STRING(200)
            },
            noiDung: {
                type: Sequelize.STRING(200)
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
        await queryInterface.dropTable('dairies');
    }
};