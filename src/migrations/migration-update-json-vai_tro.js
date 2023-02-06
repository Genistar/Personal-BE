module.exports = {
    up: (queryInterFace, Sequelize) => {
        return Promise.all([
            queryInterFace.changeColumn('Vai_tros', 'chucNang', {
                type: Sequelize.JSON,
            })
        ])
    },
    down: (queryInterFace, Sequelize) => {
        return Promise.all([
            queryInterFace.changeColumn('Vai_tros', 'chucNang', {
                type: Sequelize.STRING,
            })
        ])
    }
}