//require('dotenv').config()
const mysql2 = require("mysql2");

const db = mysql2.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PW,
    database: process.env.DB,
    //socketPath: process.env.SOCKETPATH,
    multipleStatements: true,

    // dev
    // host: "34.101.201.55",
    // user: "root",
    // password: "octofishdb",
    // database: "octofish-db",
    // multipleStatements: true,

});

db.connect((err) => {
    if (err) throw err;
    console.log("Database connected");
});

module.exports = db;