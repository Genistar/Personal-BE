module.exports = {
    up: (queryInterFace, Sequelize) => {
        return Promise.all([
            queryInterFace.addColumn('Can_bo_giang_days', 'tinh_tp', { type: Sequelize.STRING(200) }),
            queryInterFace.addColumn('Can_bo_giang_days', 'quan_huyen', { type: Sequelize.STRING(200) }),
            queryInterFace.addColumn('Can_bo_giang_days', 'xa_phuong', { type: Sequelize.STRING(200) })
        ])
    },
    down: (queryInterFace, Sequelize) => {
        return Promise.all([])
    }
}