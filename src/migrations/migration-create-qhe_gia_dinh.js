'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Qhe_gia_dinhs', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            hovaten: {
                type: Sequelize.STRING(100)
            },
            namSinh: {
                type: Sequelize.INTEGER
            },
            queQuan: {
                type: Sequelize.STRING(200)
            },
            ngheNghiep: {
                type: Sequelize.STRING(200)
            },
            donViCongTacHocTap: {
                type: Sequelize.STRING(200)
            },
            noiO: {
                type: Sequelize.STRING(200)
            },
            fkMaQuanHe: {
                type: Sequelize.STRING(2)
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
        await queryInterface.dropTable('Qhe_gia_dinhs');
    }
};