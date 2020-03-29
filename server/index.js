const result = require("dotenv").config();

if (result.error) {
  throw result.error;
}

const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");

const app = express();

app.use(cors());

const config = require("./config");
const routes = require("./routes");

app.use(bodyParser.json());

app.use("/", routes());

http.createServer(app).listen(config.port);
