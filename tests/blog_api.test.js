const app = require('../app')
const config = require('../utils/config')
const supertest = require('supertest')
const api = supertest(app)

const mongo = require('mongodb')
const MongoClient = mongo.MongoClient
const assert = require('assert')

const mongoUrl = config.MONGO_URL
const dbName = config.DB
const collectionName = 'blogs'

const initialBlogs = [
  {
    title: "blog1"
  },
  {
    title: "blog2"
  }
]

beforeEach(() => {
  const client = new MongoClient(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
  
  client.connect((err, client) => {
    assert.equal(null, err)
    const db = client.db(dbName)
    console.log(`Connected to database ${dbName}`)
    const collection = db.collection(collectionName)
    console.log(`Working with collection: ${collectionName}`)

    collection.deleteMany({}, (error, result) => {
      console.log('DeleteMany callback result: ', result)
    })

    collection.insertMany(initialBlogs, (insertedCount) => console.log(insertedCount))

    collection.find({})
      .forEach( document => {
        console.log(document)
      })
  })
})

test('blogs are returned as JSON', async () => {

  await api
    .get('/api/notes')
    .expect(200)
    .expect('Content-Type', /application\/json/)
  
})