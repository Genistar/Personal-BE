'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Cong_tac_nuoc_ngoais', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER,
                autoIncrement: true,
            },
            fkMaCanBo: {
                type: Sequelize.STRING(6)
            },
            ngayDi: {
                type: Sequelize.DATE
            },
            ngayVe: {
                type: Sequelize.DATE
            },
            quocGia: {
                type: Sequelize.STRING(40)
            },
            noiden: {
                type: Sequelize.STRING(100)
            },
            soPassport: {
                type: Sequelize.STRING(20)
            },
            nganhHoc: {
                type: Sequelize.STRING(1000)
            },
            chiPhiCT: {
                type: Sequelize.FLOAT
            },
            phanTramHuongLuong: {
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
        await queryInterface.dropTable('Cong_tac_nuoc_ngoais');
    }
};