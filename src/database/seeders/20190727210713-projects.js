'use strict'

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('Projects',
      [
        {
          id: 1,
          name: 'Projeto Cliente A'
        },
        {
          id: 2,
          name: 'Projeto Cliente B'
        }
      ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Projects', null, {})
}
