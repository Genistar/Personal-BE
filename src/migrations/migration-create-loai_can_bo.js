'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Loai_can_bos', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING(10)
            },
            ten_loai_can_bo: {
                type: Sequelize.STRING
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
        await queryInterface.dropTable('Loai_can_bos');
    }
};