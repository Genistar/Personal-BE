'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Chuc_vus', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING(3)
            },
            ten_chuc_vu: {
                type: Sequelize.STRING(200)
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
        await queryInterface.dropTable('Chuc_vus');
    }
};