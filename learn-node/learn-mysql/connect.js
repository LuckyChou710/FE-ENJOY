const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'szrk0209',
    database: 'node_mysql_test'
})

connection.connect()

const add = ''

connection.query('select * from sp_user', (err, res) => {
    if (err) {
        throw err;
    }
    console.log(res);
})