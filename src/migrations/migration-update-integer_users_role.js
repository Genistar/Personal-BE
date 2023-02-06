module.exports = {
    up: (queryInterFace, Sequelize) => {
        return Promise.all([
            queryInterFace.changeColumn('Users', 'role', {
                type: Sequelize.INTEGER,
            })
        ])
    },
    down: (queryInterFace, Sequelize) => {
        return Promise.all([
            queryInterFace.changeColumn('Users', 'role', {
                type: Sequelize.STRING,
            })
        ])
    }
}