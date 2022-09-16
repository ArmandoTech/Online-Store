const { Client } = require('pg')

const config= {
  host: 'localhost',
  port: 5432,
  user: 'Armando',
  password: 'admin123',
  database: 'online-store'
}
const connection = async () => {
  const client= new Client(config)
  await client.connect()
  return client
}

module.exports= {connection}
