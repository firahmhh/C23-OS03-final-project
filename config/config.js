const mysql2 = require("mysql2");

const db = mysql2.createConnection({
    // host: process.env.HOST,
    // user: process.env.USER,
    // password: process.env.PW,
    // database: process.env.DB,
    // socketPath: process.env.SOCKETPATH,
    // multipleStatements: true,

    // dev
    host: "35.240.236.134",
    user: "root",
    password: "fishkudb",
    database: "fishku",
    multipleStatements: true,

});

db.connect((err) => {
    if (err) throw err;
    console.log("Database connected");
});

module.exports = db;