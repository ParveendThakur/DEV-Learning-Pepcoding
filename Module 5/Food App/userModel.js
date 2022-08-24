// //tech knowledge
// //(scheme) -> set of features and rules a certain entity should follow
// const mongodb = require(`mongodb`)

// // let dblink = `mongodb+srv://dbUser:9YrdlRoCdYPC3aY1@cluster0.ovod3sb.mongodb.net/?retryWrites=true&w=majority`
// let dblink = `mongodb+srv://dbUser:MjAQyVa3DVlYkpKY@cluster0.ovod3sb.mongodb.net/?retryWrites=true&w=majority`

// mongodb.connect(dbLink).then(function(){
//     console.log("connected");
// }).catch(function(err){
//     console.log("error",err);
// })

const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'myProject';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');

  // the following code examples can be pasted here...

  return 'done.';
}

