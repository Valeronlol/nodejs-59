const fastify = require('fastify')()
const swagger = require('@fastify/swagger')
const cors = require('@fastify/cors')
const swaggerConfig = require('./utils/swagger-config')
const createRouter = require('./routers')

async function main () {
  await fastify.register(cors, {
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
  })

  await fastify.register(swagger, swaggerConfig)
  createRouter(fastify)

  await fastify.ready()
  fastify.swagger()
  await fastify.listen({ port: 3000 })
}

main()