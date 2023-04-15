const Hapis = require('@hapi/hapi')
const route = require('./routes')

const server = async () => {
  const server = Hapis.server({
    port: 9000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*']
      }
    }
  })

  server.route(route)

  await server.start()
  console.log(`server berjalan dengan baik ${server.info.uri}`)
}

server()
