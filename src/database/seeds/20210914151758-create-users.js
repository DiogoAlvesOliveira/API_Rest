const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [{
      nome: 'Carlos',
      email: 'carlos@gmail.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'Mario',
      email: 'Mario@gmail.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'Darlan',
      email: 'Darlan@gmail.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    ],
    {},
  ),
  down: async () => { },
};
