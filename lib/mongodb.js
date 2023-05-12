import { MongoClient } from 'mongodb'

const uri = "mongodb+srv://gofoodmern:Jaimin12@gofoodmern.mxturgh.mongodb.net/gofoodmern?retryWrites=true&w=majority";
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

let client
let clientPromise

// if (!process.env.MONGODB_URI) {
//   throw new Error('Add Mongo URI to env file')
// }

client = new MongoClient(uri, options)
clientPromise = client.connect()


export default clientPromise