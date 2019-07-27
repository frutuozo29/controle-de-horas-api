'use strict'

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('Users',
      [
        {
          name: 'Administrador',
          password: 'adm123'
        },
        {
          name: 'Programador1',
          password: 'prog1'
        },
        {
          name: 'Programador2',
          password: 'prog2'
        }
      ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {})
}
