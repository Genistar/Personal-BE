module.exports = {
    up: (queryInterFace, Sequelize) => {
        return Promise.all([
            queryInterFace.changeColumn('Users', 'role', {
                type: Sequelize.STRING,
            })
        ])
    },
    down: (queryInterFace, Sequelize) => {
        return Promise.all([
            queryInterFace.changeColumn('Users', 'role', {
                type: Sequelize.INTEGER,
            })
        ])
    }
}