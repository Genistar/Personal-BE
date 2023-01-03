module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.addConstraint(
                'Boi_duongs',
                {
                    type: 'foreign key',
                    name: 'fk_bdcb',
                    fields: ['fkMaCanBo'],
                    references: {
                        table: 'Can_bo_giang_days',
                        field: 'id'
                    },
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                }
            ),
            queryInterface.addConstraint(
                'Ky_luats',
                {
                    type: 'foreign key',
                    name: 'fk_ktcb',
                    fields: ['fkMaCanBo'],
                    references: {
                        table: 'Can_bo_giang_days',
                        field: 'id'
                    },
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                }
            ),
            queryInterface.addConstraint(
                'Khen_thuongs',
                {
                    type: 'foreign key',
                    name: 'fk_khthcb',
                    fields: ['fkMaCanBo'],
                    references: {
                        table: 'Can_bo_giang_days',
                        field: 'id'
                    },
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                }
            ),
            queryInterface.addConstraint(
                'Dao_taos',
                {
                    type: 'foreign key',
                    name: 'fk_dtcb',
                    fields: ['fkMaCanBo'],
                    references: {
                        table: 'Can_bo_giang_days',
                        field: 'id'
                    },
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                }
            ),
            queryInterface.addConstraint(
                'Cong_tacs',
                {
                    type: 'foreign key',
                    name: 'fk_ctcb',
                    fields: ['fkMaCanBo'],
                    references: {
                        table: 'Can_bo_giang_days',
                        field: 'id'
                    },
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                }
            ),
            queryInterface.addConstraint(
                'Cong_tac_nuoc_ngoais',
                {
                    type: 'foreign key',
                    name: 'fk_ctnncb',
                    fields: ['fkMaCanBo'],
                    references: {
                        table: 'Can_bo_giang_days',
                        field: 'id'
                    },
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                }
            ),
            queryInterface.addConstraint(
                'dairies',
                {
                    type: 'foreign key',
                    name: 'fk_nkcb',
                    fields: ['fkMaCanBo'],
                    references: {
                        table: 'Can_bo_giang_days',
                        field: 'id'
                    },
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                }
            ),
            queryInterface.addConstraint(
                'Hop_dong_lao_dongs',
                {
                    type: 'foreign key',
                    name: 'fk_hdldcb',
                    fields: ['BenB'],
                    references: {
                        table: 'Can_bo_giang_days',
                        field: 'id'
                    },
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                }
            ),
            queryInterface.addConstraint(
                'Users',
                {
                    type: 'foreign key',
                    name: 'fk_accountuser',
                    fields: ['cbId'],
                    references: {
                        table: 'Can_bo_giang_days',
                        field: 'Id'
                    },
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                }
            )

        ]);
    },

    down: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.removeConstraint(
                'Boi_duongs',
                'fk_bdcb'
            ),
            queryInterface.removeConstraint(
                'Ky_luats',
                'fk_klcb'
            ),
            queryInterface.removeConstraint(
                'Khen_thuongs',
                'fk_khthcb'
            ),
            queryInterface.removeConstraint(
                'Dao_taos',
                'fk_dtcb'
            ),
            queryInterface.removeConstraint(
                'Cong_tacs',
                'fk_ctcb'
            ),
            queryInterface.removeConstraint(
                'Cong_tac_nuoc_ngoais',
                'fk_ctngcb'
            ),
            queryInterface.removeConstraint(
                'dairies',
                'fk_nkcb'
            ),
            queryInterface.removeConstraint(
                'Hop_dong_lao_dongs',
                'fk_hdldcb'
            ),
            queryInterface.removeConstraint(
                'Users',
                'fk_accountcb'
            )
        ]);
    }
};
