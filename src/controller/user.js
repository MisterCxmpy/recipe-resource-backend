const bcrypt = require("bcrypt");

const User = require("../model/User");

async function check(req, res) {
  if (req.session.authenticated) {
    return res.status(200).json(req.session);
  } else {
    return res
      .status(400)
      .json({ message: "You must be logged in to see this content!" });
  }
}

async function register(req, res) {
  const data = req.body;
  const salt = await bcrypt.genSalt();

  try {
    data.password = await bcrypt.hash(data.password, salt);
    const result = await User.create(data);
    res.status(201).send(result);
  } catch (e) {
    console.log(e);
    res.status(401).send({ error: e.message });
  }

}

async function login(req, res) {
  const data = req.body;

  try {
    const user = await User.getOneByUsername(data.username);

    const auth = await bcrypt.compare(data.password, user.password);

    if (!auth) {
      throw new Error("Incorrect credentials");
    } else {
      req.session.authenticated = true;
      req.session.user = user;
      return res.status(200).json(req.session);
    }
  } catch (e) {
    res.status(403).send({ error: e.message });
  }
}

async function logout(req, res) {
  if (req.session.authenticated) {
    req.session.authenticated = false;
    req.session.user = {};

    return res.status(200).json(req.session);
  } else {
    return res
      .status(400)
      .json({ message: "You must be logged in to perform this function!" });
  }
}

async function getAll(req, res) {
  try {
    const user = await User.getAll()
    return res.status(200).json(user);
  } catch (e) {
    return res
      .status(400)
      .json({ message: e });
  }
}

async function getUser(req, res) {
  const idx= req.params.id

  try {
    const user = await User.getOneById(idx)
    console.log(user)
    return res.status(200).json(user);
  } catch (e) {
    return res
      .status(400)
      .json({ message: e });
  }
}

module.exports = { check, register, login, logout, getUser, getAll };
