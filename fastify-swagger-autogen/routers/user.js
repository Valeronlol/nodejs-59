const userController = require('../controllers/user-controller')

module.exports = (fastify) => {
  fastify.get('/user/:id', {
    schema: {
      description: 'post some data',
      tags: ['user'],
      params: {
        type: 'object',
        properties: {
          id: {
            type: 'number',
            description: 'user id'
          }
        }
      },
      security: [
        {
          apiKey: []
        }
      ]
    }
  }, userController.getUserById)
}