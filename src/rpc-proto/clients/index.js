const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const paths = require("./paths");
const packageDefinition = protoLoader.loadSync(paths, {});
const grpcObj = grpc.loadPackageDefinition(packageDefinition);
const productPackage = grpcObj.productPackage;
const userPackage = grpcObj.userPackage;

const productClient = new productPackage.Product(
    "localhost:50055",
    grpc.credentials.createInsecure()
);

const userClient = new userPackage.User(
    "localhost:50055",
    grpc.credentials.createInsecure()
);

module.exports = { productClient,userClient };
