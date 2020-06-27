const blogRouter = require('express').Router()
const mongo = require('mongodb')
const MongoClient = mongo.MongoClient
const assert = require('assert');
const logger = require('../utils/logger')

const mongoUrl = 'mongodb://localhost:27017';
const dbName = 'blog';

blogRouter.get('/', (req, res) => {
  const client = new MongoClient(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
  client.connect((err, client) => {
    assert.equal(null, err)
    const db = client.db(dbName)

    const collection = db.collection('blogs')
    const data = collection.find({}).toArray((error, result) => {
      assert.equal(null, error)
      res.status(200).json(result)
      client.close()
    })
  })
})

blogRouter.get('/:id', (req, res, next) => {
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

blogRouter.post('/', (req, res) => {
  const client = new MongoClient(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
  client.connect((err, client) => {
    assert.equal(null, err)
    const db = client.db(dbName)

    const body = req.body

    db.collection('blogs').insertOne(body, (error, result) => {
      if (error) next(error)
      res.status(200).json(result)
      client.close()
    })    
  })
})

blogRouter.delete('/:id', (req, res) => {
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

module.exports = blogRouter