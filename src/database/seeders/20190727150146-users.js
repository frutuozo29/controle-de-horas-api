'use strict'

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('Users',
      [
        {
          id: 1,
          name: 'Administrador',
          password: 'adm123'
        },
        {
          id: 2,
          name: 'Programador1',
          password: 'prog1'
        },
        {
          id: 3,
          name: 'Programador2',
          password: 'prog2'
        }
      ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {})
}
