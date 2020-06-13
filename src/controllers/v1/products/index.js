const products = require("./products");

let array = [
  {
    method: "get",
    path: "/",
    controller: products.get,
  },
  // {
  //   method: "get",
  //   path: "/:id",
  //   controller: products.getById,
  // },
  // {
  //   method: "post",
  //   path: "/",
  //   controller: products.create,
  // },
];
module.exports = array;
