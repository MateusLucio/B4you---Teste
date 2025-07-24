const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const user = {
  email: "admin@b4you.dev",
  password: "123456",
};

router.post("/auth/login", (req, res) => {
  const { email, password } = req.body;

  if (email !== user.email || password !== user.password) {
    return res.status(401).json({ error: "Credenciais inválidas" });
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  return res.json({ token });
});

module.exports = router;
