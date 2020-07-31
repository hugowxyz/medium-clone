const usersRouter = require('express').Router()
const bcrypt = require('bcrypt')
const config = require('../utils/config')

const mongo = require('mongodb')
const MongoClient = mongo.MongoClient
const assert = require('assert');
const logger = require('../utils/logger')

const mongoUrl = config.MONGO_URL
const dbName = config.DB
const collectionName = 'users'

usersRouter.get('/', (req, res) => {
  const client = new MongoClient(mongoUrl, { useUnifiedTopology: true, useNewUrlParser: true })
  client.connect((err, client) => {
    assert.equal(null, err)
    const db = client.db(dbName)
    const collection = db.collection(collectionName)

    collection.find({}).toArray((err, result) => {
      assert.equal(null, err)
      const toReturn = result
      
      toReturn.forEach( t => {
        delete t.password 
        delete t.passwordHash 
      })

      res.json(toReturn)
      client.close()
    })
  })
})

usersRouter.post('/', (req, res) => {
  const client = new MongoClient(mongoUrl, { useUnifiedTopology: true, useNewUrlParser: true })
  client.connect(async (err, client) => {
    assert.equal(null, err)
    const db = client.db(dbName)
    const collection = db.collection(collectionName)

    const body = req.body
    
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const user = {
      username: body.username,
      passwordHash
    }

    collection.insertOne(user, (err, result) => {
      assert.equal(null, err)
      res.json(result.insertedId)
      client.close()
    })
  })

})

module.exports = usersRouter