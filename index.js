import express from "express";
import dotenv from "dotenv";
import { allUser } from "./controller/allUser.js";
import colors from "colors";
import { dataBaseConnection } from "./config/mongoConnect.js";

const app = express();
dotenv.config();

// PORT
const port = process.env.PORT || 3002;

app.get("/", (req, res) => {
  res.send("Hello Worlds!");
});

// Geeting All User

app.use("/api/v1", allUser);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`.bgCyan);
});

dataBaseConnection();
