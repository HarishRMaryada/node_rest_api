const express = require("express");
const app = express();
const grpcServer = require("./rpc")
grpcServer.start();
require("src/controllers")(app);
module.exports = app;
