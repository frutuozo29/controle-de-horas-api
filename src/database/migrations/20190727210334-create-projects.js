module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      }
    }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('Projects')
}
