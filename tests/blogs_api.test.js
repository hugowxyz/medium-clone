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

const data = [
  {
    title: "React.js in Action",
    body: "lorem ipsum",
    date: new Date(),
  },
  {
    title: "Node.js in Action",
    body: "lorem ipsum",
    date: new Date(),
  },
  {
    title: "Become a better Programmer with 10 easy steps",
    body: "lorem ipsum",
    date: new Date(),
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

  await db.collection('users').deleteMany({})
  users[0].passwordHash = await bcrypt.hash(users[0].password, 10)
  users[1].passwordHash = await bcrypt.hash(users[1].password, 10)
  users[2].passwordHash = await bcrypt.hash(users[2].password, 10)
  const newUsers = [
    {
      username: users[0].username,
      passwordHash: users[0].passwordHash
    },
    {
      username: users[1].username,
      passwordHash: users[1].passwordHash
    },
    {
      username: users[2].username,
      passwordHash: users[2].passwordHash
    },
  ]
  const resUsers = await db.collection('users').insertMany(newUsers)

  data[0].userId = resUsers.insertedIds['0']
  data[1].userId = resUsers.insertedIds['1']
  data[2].userId = resUsers.insertedIds['2']
  
  // ASSIGNS NEW IDs: BUG
  await db.collection('blogs').deleteMany({})
  const resBlogs = await db.collection('blogs').insertMany(data)

  //console.log('RESBLOGS:', resBlogs)
  // let toModify = await db.collection('users').find({}).toArray()
  // toModify[0].blogs = [data[0].userId]
  // toModify[1].blogs = [data[1].userId]
  // toModify[2].blogs = [data[2].userId]

  // await db.collection('users').deleteMany({})
  // await db.collection('users').insertMany(toModify)

  await db.collection('users').updateOne(
    {_id: resUsers.insertedIds[['0']]}, 
    {"$push": { "blogs" : resBlogs.insertedIds['0']}})
  await db.collection('users').updateOne(
    {_id: resUsers.insertedIds[['1']]}, 
    {"$push": { "blogs" : resBlogs.insertedIds['1']}})
  await db.collection('users').updateOne(
    {_id: resUsers.insertedIds[['2']]}, 
    {"$push": { "blogs" : resBlogs.insertedIds['2']}})

  // console.log('Current state')
  // response = await db.collection('blogs').find({}).toArray()
  // console.log('Blogs', response)
  // response = await db.collection('users').find({}).toArray()
  // console.log('Users', response)

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
    /api/blogs GET RESPONSE  [
      {
        _id: '5f2420ec3e2a36688f16c77e',
        title: 'React.js in Action',
        body: 'lorem ipsum',
        date: '2020-07-31T13:47:24.628Z',
        userId: '5f2420ec3e2a36688f16c77b'
      },
      {
        _id: '5f2420ec3e2a36688f16c77f',
        title: 'Node.js in Action',
        body: 'lorem ipsum',
        date: '2020-07-31T13:47:24.628Z',
        userId: '5f2420ec3e2a36688f16c77c'
      },
      {
        _id: '5f2420ec3e2a36688f16c780',
        title: 'Become a better Programmer with 10 easy steps',
        body: 'lorem ipsum',
        date: '2020-07-31T13:47:24.628Z',
        userId: '5f2420ec3e2a36688f16c77d'
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

  test("login, then add blog", async () => {
    let response = await api
      .post('/api/login')
      .send({ username: users[0].username, password: users[0].password })
      .expect(200)
      .expect('Content-Type', /application\/json/)
    
    const token = response.body.token

    const blog = {
      title: "Test",
      body: "also test"
    }

    response = await api
      .post('/api/blogs')
      .set('Authorisation', `bearer ${token}`)
      .send(blog)
      .expect(200)
      .expect('Content-Type', /application\/json/)
    
      console.log(response.body)

      expect(response.body.inserted.title).toBe('Test')
      expect(response.body.userBlogs).toHaveLength(2)
  })

})

describe("HTTP DELETE Tests", () => {
  test("delete a specific blog from /api/blogs/:id without logging in", async () => {
    let response = await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
    
    const toDelete = response.body[0]._id
    
    response = await api
      .delete(`/api/blogs/${toDelete}`)
      .expect(401)
      
    //console.log('/api/blogs DELETE RESPONSE', response.body)

    //expect(response.body.deletedCount).toBe(1)

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

  test('login, then delete blog that doesn\'t belong to creator', async () => {
    const data = { username: users[0].username, password: users[0].password }
    let response = await api
      .post('/api/login')
      .send(data)
    
    const token = response.body.token
    response = await api
      .get('/api/blogs')
    
    const toDelete = response.body[1]._id

    response = await api
      .delete('/api/blogs/'+toDelete)
      .set('Authorisation', `bearer ${token}`)
      .expect(401)
    
    console.log(response.body)

    })

    test('login, then delete blog', async () => {
      const data = { username: users[0].username, password: users[0].password }
      let response = await api
        .post('/api/login')
        .send(data)
      
      const token = response.body.token

      response = await api
        .get(`/api/blogs/${response.body.blogs[0]}`)


      const toDelete = response.body._id
  
      response = await api
        .delete('/api/blogs/'+toDelete)
        .set('Authorisation', `bearer ${token}`)
        .expect(200)
      
      expect(response.body.deletedCount).toBe(1)
  
    })

})