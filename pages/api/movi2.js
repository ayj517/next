const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true });

export default (req, res) => {
    client.connect(err => {
        // perform actions on the collection object
        const collection = client.db("sample_mflix");

        console.log('链接数据222库成功',collection)

        collection.collection("movies").find({}).limit(30).toArray(function(err, result) { // 返回集合中所有数据
            // console.log(result,err);
            console.log(result.length)
            res.status(200).json(result)

            client.close();
        });
        console.log(err)
      });
  }
  
    