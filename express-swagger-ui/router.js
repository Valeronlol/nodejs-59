const { Router } = require('express')
const userController = require('./controllers/user-controller')

const router = new Router()

const todoAuth = (req, res, next) => {
  if (!req.headers.authorization) {
    return next(new Error('Unauthorized'))
  }
  next()
}

router.get('/user', userController.getUsers)
router.post('/user', todoAuth, (req, res, next) => {
  // TODO
  req.body
  next()
}, userController.createUser)

module.exports = router
