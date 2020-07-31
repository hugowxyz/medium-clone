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

test("create account, then create a blog post", async () => {

})

test("log into account, then create a blog post")