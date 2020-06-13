const { grpcClients } = require("src/rpc-proto");

const get = async (req, res, next) => {
    await grpcClients.productClient.list({}, (err, response) => {
      if(err) next(err)
      res.send(response);
    });
};

const getById = (req, res) => {
  console.log(req.params.id);
  res.send(`Random Product from V1 Products`);
};

const create = (req, res) => {
  try {
    let product = {
      name: "myproduct",
      price: 20,
    };
    grpcClients.productClient.create(product, (err, response) => {
      res.send(response);
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { get, getById, create };
