const getProductv1 = (req, res) => {
  res.send(`Random req`);
};

const getProductv1ID = (req, res) => {
  console.log(req.params.id);
  res.send(`Random Product from V1 Products`);
};

let array = [
  {
    method: "get",
    path: "/",
    controller: getProductv1,
  },
  {
    method: "get",
    path: "/:id",
    controller: getProductv1ID,
  },
];
module.exports = array;
