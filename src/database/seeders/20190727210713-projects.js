'use strict'

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('Projects',
      [
        {
          name: 'Projeto Cliente A'
        },
        {
          name: 'Projeto Cliente B'
        }
      ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Projects', null, {})
}
