const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connt = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Database Connection Successful ${connt.connection.host}`.green.underline)
    } catch (error) {
        console.log("Faild to connect to database", error)
    }
}

module.exports = connectDB;