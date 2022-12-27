'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Ngach_cong_chucs', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING(6)
            },
            maSoNgach: {
                type: Sequelize.STRING(10)
            },
            nhom: {
                type: Sequelize.STRING(2)
            },
            tenNgach: {
                type: Sequelize.STRING(200)
            },
            soNamNangBac: {
                type: Sequelize.INTEGER
            },
            tuVietTat: {
                type: Sequelize.STRING(20)
            },
            thuTuUuTien: {
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
        await queryInterface.dropTable('Ngach_cong_chucs');
    }
};