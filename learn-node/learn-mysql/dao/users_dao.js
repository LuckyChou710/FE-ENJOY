const pool = require("../conf/mysqlConf");
const { addUser, deleteUser, queryUser } = require("./users_sql");

module.exports = {
  add: (user, callback) => {
    const sqlparam = [
      user.username ? user.username : "",
      user.password ? user.password : "",
    ];
    pool.query(addUser, sqlparam, (err, res) => {
      if (err) {
        throw err;
      }
      callback(res);
    });
  },
  deleted: (params, callback) => {
    const { username } = params;
    const sqlparam = [username];
    pool.query(deleteUser, sqlparam, (err, res) => {
      if (err) {
        throw err;
      }
      callback(res);
    });
  },
  query: (params, callback) => {
    const { username } = params;
    const sqlparam = [username];
    pool.query(queryUser, sqlparam, (err, res) => {
      if (err) {
        throw err;
      }
      callback(res);
    });
  },
};
