import mongoose from 'mongoose'

let MONGODB_URI =
  process.env.PROD_MONGODB ||
  'mongodb://127.0.0.1:27017/yourCraftDB'

  // this is for model.findByIdAndUpdate() method, 
  // specifically so that {new: true} is the default.
mongoose.set("returnOriginal", false)

//set up the connection for mongodb

mongoose
  .connect(MONGODB_URI)
  .catch((error) => console.error("error connecting to mongodb", error.message))

//listen to mongodb events
mongoose.connection.on("disconnected", () => console.log("disconnected from mongodb"))
  
//listen to any errors while connected to mongodb
mongoose.connection.on("error", (error) => console.error(`mongodb connection error: ${error}`))

export default mongoose.connection



