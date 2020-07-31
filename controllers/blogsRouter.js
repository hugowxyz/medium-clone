const blogsRouter = require('express').Router()
const config = require('../utils/config')
const jwt = require('jsonwebtoken')

const mongo = require('mongodb')
const MongoClient = mongo.MongoClient
const assert = require('assert');
const logger = require('../utils/logger')
const { response } = require('express')

const mongoUrl = config.MONGO_URL
const dbName = config.DB

console.log('connecting to DB:', dbName)

blogsRouter.get('/', (req, res) => {
  const client = new MongoClient(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
  client.connect(async (err, client) => {
    assert.equal(null, err)
    const db = client.db(dbName)

    const collection = db.collection('blogs')
    const result = await collection.find({}).toArray()

    const queryId = new mongo.ObjectID(result.userId)

    const user = db.collection('users').find({ _id: queryId})

    res.status(200).json(result)
    client.close()
  })
})

blogsRouter.get('/:id', (req, res, next) => {
  const client = new MongoClient(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
  client.connect((err, client) => {
    assert.equal(null, err)
    const db = client.db(dbName)

    const queryId = new mongo.ObjectID(req.params.id)

    db.collection('blogs').findOne({_id: queryId}, (error, result) => {
      if (error) next(error)
      logger.info(result)
      res.status(200).json(result)
      client.close()
    })  
  })
})

const getToken = request => {
  // Authorization header
  const auth = request.get('authorisation')
  if ( auth && auth.toLowerCase().startsWith('bearer ') ) {
    return auth.substring(7)
  }
  return null
}

blogsRouter.post('/', (req, res) => {
  const client = new MongoClient(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
  client.connect(async (err, client) => {
    assert.equal(null, err)
    const db = client.db(dbName)

    const body = req.body
    const token = getToken(req)
    let decodedToken
    try {
      decodedToken = jwt.verify(token, process.env.SECRET)
    } catch(err) {
      if (err.name === 'JsonWebTokenError') {
        client.close()
        return res.status(401).json({ error: 'token missing or invalid' })
      }
    }
    
    if ( !token || !decodedToken.id ) {
      client.close()
      return res.status(401).json({ error: 'token missing or invalid' })
    }
    const user = await db.collection('users').findOne({ username: decodedToken.username })

    const toInsert = {
      title: body.title,
      body: body.body,
      userId: user._id,
      date: new Date()
    }

    const result = await db.collection('blogs').insertOne(toInsert)

    if ( user.blogs === undefined ) {
      const newUser = {
        ...user,
        blogs: [
          result.insertedId
        ]
      }     
    } else {
      console.log(user)
      newUser = user.blogs.concat(result.insertedId)
    }

    res.json({ inserted: result.ops[0], userBlogs: newUser})
    client.close()
  })
})

blogsRouter.delete('/:id', (req, res) => {
  const client = new MongoClient(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
  client.connect((err, client) => {
    assert.equal(null, err)
    const db = client.db(dbName)

    const queryId = new mongo.ObjectID(req.params.id)

    db.collection('blogs').removeOne({_id: queryId}, (error, result) => {
      if (error) next(error)
      res.status(200).json(result)
      client.close()
    })
    
  })
})

module.exports = blogsRouter