module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('ProjectUser', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      projectId: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('ProjectUser')
}
