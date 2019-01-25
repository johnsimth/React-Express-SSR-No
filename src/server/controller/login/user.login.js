const jwt = require('jsonwebtoken');
const db = require('../../models');
const config = require('./token_config.json');

const users = db.User;
// users hardcoded for simplicity, store in a db for production applications
module.exports = {
  authenticate,
  getAll
};

async function authenticate({ username, password }) {
  console.log(password);
  const user = users.findOne(u => u.username == username);
  if (user) {
    const token = jwt.sign({ sub: user.id }, config.secret);
    console.log(token);
    const { password, ...userWithoutPassword } = user;
    return {
      ...userWithoutPassword,
      token
    };
  }
}

async function getAll(userTable) {
  return userTable.map((u) => {
    const { password, ...userWithoutPassword } = u;
    return userWithoutPassword;
  });
}
