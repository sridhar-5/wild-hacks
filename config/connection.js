//required driver
const mongoose = require("mongoose");
require("dotenv").config();

//connecting to the database in this function
async function ConnectDatabase() {
  var DatabaseConnection = mongoose.connect(
    `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.fipzb.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
    }
  );

  DatabaseConnection.then(() => {
    console.log("connected to the database successfully....!");
  });

  DatabaseConnection.catch((error) => {
    console.log(`Connection to the database refused...${error}`);
  });
}

module.exports = ConnectDatabase;
