module.exports = {
    up: (queryInterFace, Sequelize) => {
        return Promise.all([
            queryInterFace.changeColumn('Hop_dong_lao_dongs', 'heSoLuong', {
                type: Sequelize.FLOAT,
            })
        ])
    },
    down: (queryInterFace, Sequelize) => {
        return Promise.all([
            queryInterFace.changeColumn('Hop_dong_lao_dongs', 'heSoLuong', {
                type: Sequelize.INTEGER,
            })
        ])
    }
}