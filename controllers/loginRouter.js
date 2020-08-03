const loginRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const config = require('../utils/config')

const mongo = require('mongodb')
const MongoClient = mongo.MongoClient
const assert = require('assert');
const logger = require('../utils/logger')

const mongoUrl = config.MONGO_URL
const dbName = config.DB
const collectionName = 'users'

loginRouter.post('/', (req ,res) => {
  const client = new MongoClient(mongoUrl, { useUnifiedTopology: true, useNewUrlParser: true })
  client.connect(async (err, client) => {
    assert.equal(null, err)
    const db = client.db(dbName) 
    const collection = db.collection(collectionName)

    const body = req.body
    const user = await collection.findOne({ username: body.username })
    let correctPassword
    try {
      correctPassword = await bcrypt.compare(body.password, user.passwordHash)
    } catch {
      client.close()
      return res.status(401).json({error: 'Incorrect username or password'})
    }

    if ( !correctPassword ) {
      client.close()
      return res.status(401).json({error: 'Incorrect username or password'})
    }
    
    const userForToken = {
      username: user.username,
      id: user._id,
      blogs: user.blogs
    }

    const token = jwt.sign(userForToken, process.env.SECRET)

    res.status(200).send({ token, username: user.username, blogs: user.blogs })

    client.close()
  })
})

module.exports = loginRouter