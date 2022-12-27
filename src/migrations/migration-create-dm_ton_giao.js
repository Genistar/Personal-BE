'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('DM_ton_giaos', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING(2)
            },
            ten_ton_giao: {
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
        await queryInterface.dropTable('DM_ton_giaos');
    }
};