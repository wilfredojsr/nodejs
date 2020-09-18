// CRUD create read update delete
const {MongoClient, ObjectID} = require('mongodb')

//const connectionURL = 'mongodb://<user>:encodeURIComponent('<pass>')@<host>:<port>?authSource=admin'
const connectionURL = 'mongodb://' + process.argv[2] + ':' + encodeURIComponent(process.argv[3]) + '@' + process.argv[4] + ':' + process.argv[5] + '?authSource=admin'
//const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, {useUnifiedTopology: true}, (error, client) => {
  if (error) {
    console.log(error)
    return console.log('Unable to connect to database!')
  }

  const db = client.db(databaseName)

  // db.collection('users').insertOne({
  //   name: 'Wilfredo',
  //   age: 35
  // })

})