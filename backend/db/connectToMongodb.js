const mongoose = require("mongoose");

exports.connectToMongodb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("connected to mongodb")
    } catch (error) {
        console.log("error connecting to mongodb", error.message)
    }
}