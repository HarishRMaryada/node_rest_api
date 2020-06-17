const express = require("express");
const app = express();
process.on("uncaughtException",(Ex)=>console.log(Ex))
process.on("unhandledRejection",(Ex)=>console.log(Ex))

require("src/controllers")(app);
app.use(require("src/middleware/error"))

module.exports = app;
