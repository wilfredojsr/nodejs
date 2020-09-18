const mongoose = require('mongoose')
const validator = require('validator')

//const connectionURL = 'mongodb://<user>:encodeURIComponent('<pass>')@<host>:<port>/<database>?authSource=admin'
const databaseName = 'task-manager'
const connectionURL = 'mongodb://' + process.argv[2] + ':' + encodeURIComponent(process.argv[3]) + '@' + process.argv[4] + ':' + process.argv[5] + '/' + databaseName + '?authSource=admin'
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