'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Bac_luongs', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            heSoLuong: {
                type: Sequelize.FLOAT
            },
            ngayBatDauHieuLuc: {
                type: Sequelize.DATE
            },
            ngayHetHieuLuc: {
                type: Sequelize.DATE
            },
            fkIdNgach: {
                type: Sequelize.STRING(6)
            },
            fkIdNhom: {
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
        await queryInterface.dropTable('Bac_luongs');
    }
};