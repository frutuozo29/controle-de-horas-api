module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      }
    }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('Users')
}
