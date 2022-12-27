'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('DM_dan_tocs', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING(2)
            },
            ten_dan_toc: {
                type: Sequelize.STRING
            },
            ghichu: {
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
        await queryInterface.dropTable('DM_dan_tocs');
    }
};