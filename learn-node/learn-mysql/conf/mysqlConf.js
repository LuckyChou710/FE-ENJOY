const mysql = require('mysql');

const MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'szrk0209',
    post: '3306',
    database: 'node_mysql_test'
}

// 创建连接池
const pool = mysql.createPool(MYSQL_CONF);

module.exports = {
    pool
}