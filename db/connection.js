//require db connetcion
const mysql = require('mysql2');

//create a const with credentials
const credentials = {
    host: 'localhost',
    user: 'root',
    password: '0502013',
    database: 'db_blog'
};

//create connection
const connection = mysql.createConnection(credentials);

//log to see if the connection normally function
console.log(connection);

//use connect to show if an error occured
connection.connect(err => {
    if (err) {
        throw err
    };
    console.info('Connection is working correctly');
});