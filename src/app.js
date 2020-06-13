const express = require("express");
const app = express();
require("src/controllers")(app);
app.use(require("src/middleware/error"))
module.exports = app;
