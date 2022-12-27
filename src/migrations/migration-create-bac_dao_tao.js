'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Bac_dao_taos', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING(3)
            },
            tenBac: {
                type: Sequelize.STRING(200)
            },
            thoiGianToiDa: {
                type: Sequelize.FLOAT
            },
            giaHan: {
                type: Sequelize.FLOAT
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
        await queryInterface.dropTable('Bac_dao_taos');
    }
};