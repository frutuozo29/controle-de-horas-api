'use strict'

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('ProjectUser',
      [
        {
          userId: 1,
          projectId: 1
        },
        {
          userId: 1,
          projectId: 2
        },
        {
          userId: 2,
          projectId: 1
        },
        {
          userId: 3,
          projectId: 1
        },
        {
          userId: 3,
          projectId: 2
        }
      ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('ProjectUser', null, {})
}
