'use strict';

// local db connection 

const mysql = require('mysql');

var dbConn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_project"
});
dbConn.connect(function(err){
    if(err) throw err;
    console.log('connected!');
    /*Create a database named "node_project":*/
    // dbConnection.query("CREATE DATABASE node_project", function (err, result) {
    //     if (err) throw err;
    //     console.log("Database created");
    // });
});

module.exports = dbConn;
