//required driver
const Sequelize = require("sequelize-cockroachdb");
const fs = require("fs");

require("dotenv").config();

//connecting to the database in this function
function ConnectDatabase() {
  var connection = new Sequelize({
    dialect: "postgres",
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: 26257,
    database: process.env.DATABASE_NAME,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        //for secure connection importing the ca certi
        ca: fs.readFileSync("root.crt").toString(),
      },
    },
    logging: false,
  });
}

module.exports = ConnectDatabase;
