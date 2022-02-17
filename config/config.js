const mongoose = require("mongoose");
require("colors");

const connectDB = async () => {
    try{
        const conn = await mongoose.connect("mongodb+srv://19dec011:12345@newpizza.bkqoq.mongodb.net/pizza-shop", {

            useNewUrlParser: "true",
            useUnifiedTopology: "true"
          
          })
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    }catch(error) {
        console.error(`Error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
};

module.exports = connectDB;
