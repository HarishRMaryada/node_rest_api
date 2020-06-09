const getProduct = (req, res) => {
  res.send(`Random req`);
};
let array = [
  {
    method: "get",
    path: "/",
    controller: getProduct,
  },
  {
    method: "get",
    path: "/:id",
    controller: getProduct,
  },
];

module.exports = array;
