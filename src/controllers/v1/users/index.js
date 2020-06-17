const {list} = require("./users")


let array = [
  {
    method: "get",
    path: "/",
    controller: list,
  },
  // {
  //   method: "get",
  //   path: "/:id",
  //   controller: getUserbyId,
  // },
];
module.exports = array;
