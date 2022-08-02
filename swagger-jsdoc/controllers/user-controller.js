const { randomUUID } = require('crypto')

exports.getUsers = (req, res) => {
  res.send([
    {
      user_id: randomUUID(),
      name: 'Vasya',
      status: 'active',
    },
    {
      user_id: randomUUID(),
      name: 'Valera',
      status: 'banned',
    },
  ])
}

exports.createUser = (req, res) => {
  res.send({
    user_id: randomUUID(),
    status: 'active',
    ...req.body,
  })
}