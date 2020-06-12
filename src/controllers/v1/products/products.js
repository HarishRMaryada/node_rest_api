const { grpcClients } = require("src/rpc-proto");

const get = (req, res) => {
  grpcClients.productClient.list({}, (err, response) => {
    console.log(err)
    if (err) res.send("ERROR");
    res.status(200).json(response.products);
  });
};

const getById = (req, res) => {
  console.log(req.params.id);
  res.send(`Random Product from V1 Products`);
};

module.exports = { get, getById };
