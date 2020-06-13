const { grpcClients } = require("src/rpc-proto");

const get = (req, res) => {
  grpcClients.productClient.list({},(err, response) => {
   console.log(err)
   if (err) res.send("ERROR");
    res.send(response);
  });
};

const getById = (req, res) => {
  console.log(req.params.id);
  res.send(`Random Product from V1 Products`);
};

// const create = (req, res) => {
//   grpcClients.productClient.list({},(err, response) => {
//    console.log(err)
//    console.log(response)
//     res.send(response);
//   });
// };
module.exports = { get, getById };
