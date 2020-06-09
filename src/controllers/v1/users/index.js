const getUser = (req, res) => {
  res.send(`Random req`);
};

const getUserbyId = (req, res) => {
  console.log(req.params.id);
  res.send(`Random`);
};

let array = [
  {
    method: "get",
    path: "/",
    controller: getUser,
  },
  {
    method: "get",
    path: "/:id",
    controller: getUserbyId,
  },
];
module.exports = array;
