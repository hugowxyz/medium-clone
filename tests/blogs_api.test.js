const app = require('../app')
const config = require('../utils/config')
const supertest = require('supertest')
const api = supertest(app)

const mongo = require('mongodb')
const MongoClient = mongo.MongoClient
const assert = require('assert')

const mongoUrl = config.MONGO_URL
const dbName = config.DB
const collectionName = "blogs"

const data = [
  {
    title: "React.js in Action"
  },
  {
    title: "Node.js in Action"
  },
  {
    title: "Become a better Programmer with 10 easy steps"
  }
]

beforeEach(async () => {
  // Before each test we need to clear and re-populate the database
  // We are using the database called blogTests
  // We are could create a special endpoint, however the code
  // is going to be written here instead

  const clientInstance = new MongoClient(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true})
  const client = await clientInstance.connect()
  
  assert.equal("blogTests", dbName)
  
  const db = client.db(dbName)
  const collection = db.collection(collectionName)
  
  await collection.deleteMany({})
  await collection.insertMany(data)

  client.close()
})

describe("HTTP GET Tests", () => {

  test("retrieve all blogs from /api/blogs", async () => {
    const response = await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
    //console.log('/api/blogs GET RESPONSE', response.body)
    expect(response.body).toHaveLength(data.length)

    /*
    
    /api/blogs GET RESPONSE [
      { _id: '5f2081a6a5cb177eac58bcb1', title: 'React.js in Action' },
      { _id: '5f2081a6a5cb177eac58bcb2', title: 'Node.js in Action' },
      {
        _id: '5f2081a6a5cb177eac58bcb3',
        title: 'Become a better Programmer with 10 easy steps'
      }
    ]
    
    */
  })

  test("retrieve specific blog from /api/blogs/:id", async () => {
    let response = await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
    
    const toGet = response.body[0]._id

    response = await api
      .get(`/api/blogs/${toGet}`)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    //console.log('/api/blogs/:id GET RESPONSE', response.body)
    expect(response.body.title).toBe(data[0].title)

    /*
    
    /api/blogs/:id GET RESPONSE { _id: '5f2081dfc9b56c7f09f156ea', title: 'React.js in Action' }
    
    */
    
  })

})

describe("HTTP POST Tests", () => {

  test("post a blog to blogs endpoint without auth header", async () => {
    // response.body is equivalent to what the endpoint returns 
    let response = await api.get('/api/blogs')
      .expect(200)
    const length = response.body.length

    response = await api
      .post('/api/blogs')
      .send({ data: "dummy data" })
      .expect(401)
      .expect('Content-Type', /application\/json/)
    
    //console.log('/api/blogs POST RESPONSE', response.body)
    expect(response.body.error).toBe('token missing or invalid')

    response = await api.get('/api/blogs')
    expect(response.body.length).toEqual(length)

    /*
    
    /api/blogs POST RESPONSE {
      result: { n: 1, ok: 1 },
      connection: {
        _events: {},
        _eventsCount: 4,
        id: 1,
        address: '127.0.0.1:27017',
        bson: {},
        socketTimeout: 360000,
        monitorCommands: false,
        closed: false,
        destroyed: false,
        lastIsMasterMS: 0
      },
      ops: [ { data: 'dummy data', _id: '5f2081fe23f0547f5cdb255a' } ],
      insertedCount: 1,
      insertedId: '5f2081fe23f0547f5cdb255a',
      n: 1,
      ok: 1
    }
    
    */
    
  })

  test("")

})

describe("HTTP DELETE Tests", () => {
  test("delete a specific blog from /api/blogs/:id", async () => {
    let response = await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
    
    const toDelete = response.body[0]._id
    
    response = await api
      .delete(`/api/blogs/${toDelete}`)
      .expect(200)
      
    //console.log('/api/blogs DELETE RESPONSE', response.body)

    expect(response.body.deletedCount).toBe(1)

    /*

    /api/blogs DELETE RESPONSE {
      result: { n: 1, ok: 1 },
      connection: {
        _events: {},
        _eventsCount: 4,
        id: 1,
        address: '127.0.0.1:27017',
        bson: {},
        socketTimeout: 360000,
        monitorCommands: false,
        closed: false,
        destroyed: false,
        lastIsMasterMS: 0
      },
      deletedCount: 1,
      n: 1,
      ok: 1
    }

    */
    
  })

})