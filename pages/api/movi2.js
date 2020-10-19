const MongoClient = require('mongodb').MongoClient;
const url = require('url')
// const uri = process.env.MONGODB_URI;
// const client = new MongoClient(uri, { useNewUrlParser: true });

// export default (req, res) => {
//     client.connect(err => {
//         // perform actions on the collection object
//         console.log(123123)
//         const collection = client.db("sample_mflix");

//         console.log('链接数据222库成功')

//         collection.collection("movies").find({}).limit(30).toArray(function(err, result) { // 返回集合中所有数据
//             // console.log(result,err);
//             console.log(result.length)
//             res.status(200).json(result)

//             client.close();
//         });
//         console.log(err)
//       });
//   }


// Create cached connection variable
let cachedDb = null

// A function for connecting to MongoDB,
// taking a single parameter of the connection string
async function connectToDatabase(uri) {
  // If the database connection is cached,
  // use it instead of creating a new connection
  if (cachedDb) {
    return cachedDb
  }

  // If no connection is cached, create a new one
  const client = await MongoClient.connect(uri, { useNewUrlParser: true })

  // Select the database through the connection,
  const db = await client.db('sample_mflix')
  // Cache the database connection and return the connection
  cachedDb = db
  return db
}

// The main, exported, function of the endpoint,
// dealing with the request and subsequent response
module.exports = async (req, res) => {
    console.log('链接数据库')
  // Get a database connection, cached or otherwise,
  // using the connection string environment variable as the argument
  const db = await connectToDatabase(process.env.MONGODB_URI)
  console.log('链接数据库OK')
  // Select the "users" collection from the database
  const collection = await db.collection('movies')
  console.log('链接数据库OK1')
  // Select the users collection from the database
  const users = await collection.find({}).limit(30).toArray()
  console.log('链接数据库OK2')
  // Respond with a JSON string of all users in the collection
  res.status(200).json({ users })
}
  
    