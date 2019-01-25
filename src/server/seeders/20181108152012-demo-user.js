

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'users',
    [
      {
        emailAddress: 'demo@gmail.com',
        username: 'demouser',
        password: 'demo123',
      },
    ],
    {},
  ),
  down: (queryInterface, Sequelize) => {},
};
