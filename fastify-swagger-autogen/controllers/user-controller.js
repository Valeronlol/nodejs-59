exports.getUserById = (req, reply) => {
  reply
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send([
      {
        id: 1,
      }
    ])
}
