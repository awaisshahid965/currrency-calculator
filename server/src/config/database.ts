import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const dbUri = process.env.MONGODB_URI ?? ''

class Mongodb {
  private static _db: mongoose.Connection | undefined = undefined

  static async init() {
    if (!Mongodb._db) {
      await mongoose.connect(dbUri)
      Mongodb._db = mongoose.connection
    } else {
      console.warn('MongoDB connection already initialized.')
    }
  }
}

export default Mongodb
