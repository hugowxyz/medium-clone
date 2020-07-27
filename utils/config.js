require('dotenv').config()

let MONGO_URL = process.env.MONGO_URL
let DB = process.env.DB
let PORT = process.env.PORT

if ( process.env.NODE_ENV === 'test' ) 
  DB = process.env.TEST_DB

module.exports = {
  MONGO_URL,
  DB,
  PORT
}