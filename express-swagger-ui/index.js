const express = require('express')
const swaggerUi = require('swagger-ui-express')
const yaml = require('yamljs')
const path = require('path')
const router = require('./router')

const swaggerPath = path.resolve(__dirname, 'swagger.yml')
const swaggerDocument = yaml.load(swaggerPath)

const app = express()
const port = parseInt(process.env.PORT) || 3000

app
  .use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  .use(express.json())
  .use(router)
  .use((err, req, res, next) => {
    if (err) {
      console.error(err)
    }
  })
  .listen(port, (err) => {
    if (err) {
      console.error(err)
    } else {
      console.log(`Swagger started on ${port}`)
    }
  })