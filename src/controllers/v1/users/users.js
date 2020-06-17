const { grpcClients } = require("src/rpc-proto");
const list = async (req, res, next) => {
    await grpcClients.userClient.list({}, (err, response) => {
      if(err) next(err)
      res.send(response);
    });
};
module.exports = {list}