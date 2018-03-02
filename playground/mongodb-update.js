//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a988f8107dc4d084e171f62')
  // }, {
  //   $set: {
  //     completed: false
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) =>{
  //   console.log(result);
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a989085c04f680850ebf258')
  }, {
    $set: {
      name: 'Mario'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) =>{
    console.log(result);
  })

  //db.close();
});
