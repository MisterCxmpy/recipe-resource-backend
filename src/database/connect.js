const { Pool } = require('pg')

const db = new Pool({
    connectionString: process.env.DB_URL
})

console.log('Database connection established')

module.exports = db;