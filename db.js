const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://iNotebook:ChiragMongoOne@cluster1.nkuimsa.mongodb.net/"


const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("connected to Mongo successfully");
  } catch (error) {
    console.log("error connecting to Mongo:", error);
  }
}

module.exports = connectToMongo;
