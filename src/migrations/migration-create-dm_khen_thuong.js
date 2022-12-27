'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('DM_khen_thuongs', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING(3)
            },
            tenKhenThuong: {
                type: Sequelize.STRING(500)
            },
            tenVietTat: {
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
        await queryInterface.dropTable('DM_khen_thuongs');
    }
};