const express = require("express");
const app = express();
require("src/controllers")(app);
module.exports = app;
