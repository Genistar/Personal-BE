'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Dao_taos', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER,
                autoIncrement: true,
            },
            fkMaBac: {
                type: Sequelize.STRING(3)
            },
            fkMaHeDaoTao: {
                type: Sequelize.STRING(2)
            },
            fkMaCanBo: {
                type: Sequelize.STRING(6)
            },
            nganhDaoTao:
            {
                type: Sequelize.STRING(100)
            },
            noiDaoTao: {
                type: Sequelize.STRING(1000)
            },
            quocGia: {
                type: Sequelize.STRING(100)
            },
            tenLuanAn: {
                type: Sequelize.STRING(200)
            },
            thoiGianBD: {
                type: Sequelize.DATE
            },
            thoiGianKT: {
                type: Sequelize.DATE
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
        await queryInterface.dropTable('Dao_taps');
    }
};