const jwt = require('jsonwebtoken');
const config = require('./login/token_config.json');
const db = require('../models');

const user = db.User;
const uploadData = db.uploadData;

// Login a user and return token
exports.login = (req, res) => {
  const { username, password } = req.body;
  const auth_man = user.find({
    where: {
      username,
      password
    }
  });
  if (auth_man) {
    const token = jwt.sign({ sub: user.id }, config.secret);
    res.send({ loginFlag: true, tokenData: token });
  }
};
// Create a user
exports.create = (req, res) => {
  const { emailAddress, username, password } = req.body;
  // Save to MySQL database
  user
    .create({
      emailAddress,
      username,
      password
    })
    .then((user) => {
      // Send created user to client
      res.send(user);
    });
};
// Fetch all users
exports.findAll = (req, res) => {
  user.findAll().then((users) => {
    res.send(users);
  });
};
// Find a user by Id
exports.findById = (req, res) => {
  user.findById(req.params.userId).then((user) => {
    res.send(user);
  });
};
// Update a user
exports.update = (req, res) => {
  const id = req.params.userId;
  const { emailAddress, username, password } = req.body;
  user
    .update(
      {
        emailAddress,
        username,
        password
      },
      {
        where: { id }
      }
    )
    .then(() => {
      res.status(200).send(`updated successfully a user with id = ${id}`);
    });
};

// Delete a user by Id
exports.delete = (req, res) => {
  const id = req.params.userId;
  user
    .destroy({
      where: { id }
    })
    .then(() => {
      res.status(200).send(`deleted successfully a user with id = ${id}`);
    });
};

// File uploading
exports.upload = (req, res) => {
  const filePath = `${req.protocol}://${req.domain}/${req.file.filename}`;
  uploadData
    .create({
      filename: req.body.filename,
      url: filePath
    })
    .then((user) => {
      res.send(user);
    });
};
