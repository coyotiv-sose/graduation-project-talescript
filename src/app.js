require('dotenv').config()
require('./database-connection')
console.log(process.env.MONGODB_CONNECTION_STRING)