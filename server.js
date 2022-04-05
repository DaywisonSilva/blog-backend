const jsonServer = require('json-server')
const path = require('path')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()
const cors = require('cors')

server.use(middlewares)
server.use(router)
server.use(
  cors({
    origin: 'http://seila.com'
  })
)
server.listen(80, () => {
  console.log('JSON Server is running')
})
