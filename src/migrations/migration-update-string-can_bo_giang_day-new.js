module.exports = {
    up: (queryInterFace, Sequelize) => {
        return Promise.all([
            queryInterFace.changeColumn('Can_bo_giang_days', 'hinh_anh', {
                type: Sequelize.STRING(100),
                allowNull: true,
            })
        ])
    },
    down: (queryInterFace, Sequelize) => {
        return Promise.all([
            queryInterFace.changeColumn('Can_bo_giang_days', 'hinh_anh', {
                type: Sequelize.BLOB('long'),
            })
        ])
    }
}