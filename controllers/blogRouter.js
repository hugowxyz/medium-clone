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
    const data = collection.find({}).toArray((err, data) => {
      assert.equal(null, err)
      res.status(200).json(data)
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

    db.collection('blogs').findOne({_id: queryId}, (err, data) => {
      if (err) next(err)
      logger.info(data)
      res.status(200).json(data)
      client.close()
    })
    
  })
})

blogRouter.post('/', (req, res) => {
  
})

module.exports = blogRouter