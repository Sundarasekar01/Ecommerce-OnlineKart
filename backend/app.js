const express = require("express");
const app = express();
const errorMiddleware = require("./middlewares/error");

app.use(express.json());

const products = require("./routes/productRoutes");
app.use("/api/v1/", products);

app.use(errorMiddleware);

module.exports = app;
