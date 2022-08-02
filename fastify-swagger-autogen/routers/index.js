const createUserRouter = require('./user')

module.exports = (fastify) => {
  createUserRouter(fastify)
}