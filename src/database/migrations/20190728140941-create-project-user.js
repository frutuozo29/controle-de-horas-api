module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('ProjectUsers', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Users', key: 'id' },
        onDelete: 'CASCADE'
      },
      projectId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Projects', key: 'id' },
        onDelete: 'CASCADE'
      }
    }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('ProjectUsers')
}
