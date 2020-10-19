export default (req, res) => {
  res.status(200).json({ text: 'Hello' })
}
// vercel secrets add my-mongodb-uri mongodb+srv://<user>:<password>@my-cluster-uf345.mongodb.net/<database-name>?retryWrites=true