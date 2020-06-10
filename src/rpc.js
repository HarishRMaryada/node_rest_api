const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const PROTO_PATH = __dirname + "/protos/products.proto";
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {});
const grpcObj = grpc.loadPackageDefinition(packageDefinition);
const productPackage = grpcObj.productPackage;

const server = new grpc.Server();
server.bind("0.0.0.0:50051", grpc.ServerCredentials.createInsecure()); //need to config
let products = []
function create(call, callback) {
  products.push(call.request)
  callback(null, { _id: "product 1", name: "myproduct", price: 20 }); //resJson must match with proto
}
function list(call, callback) {
  callback(null,{"products":products})
}
function listStream(call, callback) {
  products.forEach(p => call.write(p))
  call.end()
}
server.addService(productPackage.Product.service, {
  create: create,
  list: list,
  listStream:listStream
});

module.exports = server