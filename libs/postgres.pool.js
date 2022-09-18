const { Pool } = require('pg')
const { config } = require('../config/config')

const USER= encodeURIComponent(config.dbUser)
const PASSWORD= encodeURIComponent(config.dbPassword)
const URI= `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

// const config= {
//   host: 'localhost',
//   port: 5432,
//   user: 'Armando',
//   password: 'admin123',
//   database: 'online-store'
// }

const pool= new Pool({
  connectionString: URI
})


module.exports= {pool}
