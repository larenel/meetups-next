import { MongoClient } from 'mongodb'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body

    const client = await MongoClient.connect(
      'mongodb+srv://admin:12345@cluster0.1sjptcr.mongodb.net/?retryWrites=true&w=majority'
    )
    const db = client.db()

    const meetupsCollection = db.collection('meetups')

    const result = await meetupsCollection.insertOne(data)
    console.log(result)
    client.close()
    res.status(201).json({
      message: 'nserted!!',
    })
  }
}
export default handler
