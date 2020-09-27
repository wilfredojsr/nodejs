const mongoose = require('mongoose')
const validator = require('validator')

//const connectionURL = 'mongodb://<user>:encodeURIComponent('<pass>')@<host>:<port>/<database>?authSource=admin'
const databaseName = 'task-manager'
const connectionURL = 'mongodb://' + process.env.MONGO_DB_W + ':' + encodeURIComponent(process.env.MONGO_DB_X) + '@' + process.env.MONGO_DB_Y + ':' + process.env.MONGO_DB_Z + '/' + databaseName + '?authSource=admin'
//const connectionURL = 'mongodb://127.0.0.1:27017'

mongoose.connect(connectionURL, {
  useUnifiedTopology: true,
  useCreateIndex: true
})

const User = mongoose.model('User', {
  name:{
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid!')
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive number')
      }
    }
  }
})

const me = new User({
  name: "   Wilfredo  ",
  email: "my.email@mail.com",
  age: 35
})

me.save().then(() => {
  console.log(me)
}).catch((error) => {
  console.log('Error!', error)
})