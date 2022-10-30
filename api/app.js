const express = require("express");
const connection = require("./config/config");
const { userRouter, examRouter } = require("./router/app.router");
const cors = require("cors");
const app = express();

require("dotenv").config();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use(userRouter, examRouter);
app.use("/uploads", express.static("uploads"));

connection();

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
