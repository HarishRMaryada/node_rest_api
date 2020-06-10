const products = require("./products");

let array = [
  {
    method: "get",
    path: "/",
    controller: products.get,
  },
  {
    method: "get",
    path: "/:id",
    controller: products.getById,
  },
];
module.exports = array;
