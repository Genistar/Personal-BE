'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Loai_hop_dongs', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING(2)
            },
            tenLoaiHopDong: {
                type: Sequelize.STRING(100)
            },
            kyTuVietTat: {
                type: Sequelize.STRING(20)
            },
            soThang: {
                type: Sequelize.INTEGER
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
        await queryInterface.dropTable('Loai_hop_dongs');
    }
};