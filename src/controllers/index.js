var express = require("express");
var router = express.Router();
const { lstatSync, readdirSync } = require("fs");
const { join } = require("path");

const isDirectory = (source) => lstatSync(source).isDirectory();
const getDirectories = (source) =>
  readdirSync(source)
    .map((name) => join(source, name))
    .filter(isDirectory);

const controllers = (app) => {
  app
    .route("/book")
    .get(function (req, res) {
      res.send("Get a random book");
    })
    .post(function (req, res) {
      res.send("Add a book");
    })
    .put(function (req, res) {
      res.send("Update the book");
    });

  let dirArray = getDirectories("src/controllers");
  if (dirArray && dirArray.length > 0) {
    dirArray.forEach((element) => {
      let values = getDirectories(element);
      if (values && values.length > 0) {
        values.forEach((ele) => {
          let routes = require(ele);
          routes.forEach((route) => {
            let path = "/api/" + ele + "" + route.path;
            path = path.replace("/src/controllers", "");
            switch (route.method) {
              case "get":
                app.route(path).get(route.controller);
              case "post":
                app.route(path).post(route.controller);
              case "put":
                app.route(path).post(route.controller);
              case "patch":
                app.route(path).post(route.controller);
              case "delete":
                app.route(path).post(route.controller);
            }
          });
        });
      }
    });
  }
  return router;
};
module.exports = controllers;
