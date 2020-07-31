const app = require('../app')
const config = require('../utils/config')
const supertest = require('supertest')
const api = supertest(app)
const bcrypt = require('bcrypt')

const mongo = require('mongodb')
const MongoClient = mongo.MongoClient
const assert = require('assert')

const mongoUrl = config.MONGO_URL
const dbName = config.DB
const collectionName = "users"

const users = [
  {
    username: "hugo",
    password: "password1"
  },
  {
    username: "bob",
    password: "password2"
  },
  {
    username: "john",
    password: "password3"
  }
]

beforeEach(async () => {
  const clientInstance = new MongoClient(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  const client = await clientInstance.connect()

  assert.equal("blogTests", dbName)

  const db = client.db(dbName)
  const collection = db.collection(collectionName)
  
  await collection.deleteMany({})
  users[0].passwordHash = await bcrypt.hash(users[0].password, 10)
  users[1].passwordHash = await bcrypt.hash(users[1].password, 10)
  users[2].passwordHash = await bcrypt.hash(users[2].password, 10)
  await collection.insertMany(users)
  
  client.close()
})

describe("GET to /api/users", () => {
  test("get the users", async () => {
    const response = await api
      .get('/api/users')
      .expect(200)
      .expect('Content-Type', /application\/json/)

    console.log(response.body)

    expect(response.body[0].password).toBe(undefined)
    expect(response.body[0].passwordHash).toBe(undefined)
    
  })
})

describe("POST to /api/users", () => {
  test('adding a user', async () => {
    const data = { username: "username", password: "password" }
    let response = await api
      .post('/api/users')
      .send(data)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    console.log('POST to /api/users response', response.body)
    
    response = await api
      .get('/api/users')
    
    expect(response.body[response.body.length-1].password).toBe(undefined)
    expect(response.body[response.body.length-1].passwordHash).toBe(undefined)
  })

})

