const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");

app.use(authRoutes);
app.use("/products", productRoutes);

module.exports = app;
