'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('DM_he_dao_taos', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING(2)
            },
            tenHeDaoTao: {
                type: Sequelize.STRING(200)
            },
            hienThi: {
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
        await queryInterface.dropTable('DM_he_dao_taos');
    }
};