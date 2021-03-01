module.exports = {
  addUser: "INSERT INTO user_info (username,password) VALUES (?,?);",
  deleteUser: "DELETE FROM user_info WHERE username=?;",
  queryUser: "SELECT * FROM user_info;",
};
