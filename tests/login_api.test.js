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

describe("POST request to /api/login", () => {
  test("correct login with Hugo username", async () => {
    const data = { username: "hugo", password: "password1" }
    
    const response = await api
      .post('/api/login')
      .send(data)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    console.log(response.body)
  })

  test("incorrect login with Hugo username", async () => {
    const data = { username: "hugo", password: "wrong"}

    const response = await api
      .post('/api/login')
      .send(data)
      .expect(401)
      .expect('Content-Type', /application\/json/)
    
    console.log(response.body)
  })

  test("incorrect login with username and no password", async () => {
    const data = { username: "hugo"}

    const response = await api
      .post('/api/login')
      .send(data)
      .expect(401)
      .expect('Content-Type', /application\/json/)
    
    console.log(response.body)
  })

  test("incorrect login with incorrect username", async () => {
    const data = { username: "hugo"}

    const response = await api
      .post('/api/login')
      .send(data)
      .expect(401)
      .expect('Content-Type', /application\/json/)
    
    console.log(response.body)
  })

  test("no data", async () => {
    const data = {}

    const response = await api
      .post('/api/login')
      .send(data)
      .expect(401)
      .expect('Content-Type', /application\/json/)
    
    console.log(response.body)
  })

})