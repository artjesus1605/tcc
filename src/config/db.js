const { Pool } = require('pg')

module.exports = new Pool ({
    user: 'postgres',
    password: 'dbmizel',
    host: 'localhost',
    port: 5432,
    database: 'gymmanager'
})
