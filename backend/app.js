const express = require("express");
const app = express();
const db = require("./models/index.js");
require("dotenv").config();

const connectToDatabase = async () => {
  db.sequelize
    .authenticate()
    .then(() => {
      console.log("Conexão com o banco de dados estabelecida com sucesso.");
    })
    .catch((error) => {
      setTimeout(() => connectToDatabase(), 5000);
    });
};

app.use(express.json());

const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");

app.use(authRoutes);
app.use("/products", productRoutes);

module.exports = app;
