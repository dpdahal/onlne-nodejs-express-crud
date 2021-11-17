let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'online_nodejs_crud'
});

connection.connect((error) => {
    if (!!error) {
        console.log("Database connection errors")
    } else {
        console.log("Database connection okay")
    }
});

module.exports = connection;
