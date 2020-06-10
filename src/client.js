const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const PROTO_PATH = __dirname + "/protos/products.proto";
const packageDef = protoLoader.loadSync(PROTO_PATH, {});
const grpcObj = grpc.loadPackageDefinition(packageDef);
const productPackage = grpcObj.productPackage;

const client = new productPackage.Product("localhost:50051",grpc.credentials.createInsecure())

client.create({
    "_id":"somerandomid2",
    "name" :"myproduct",
    "price":20
},(err,res)=>{
    console.log(res)
    console.log(err)
})

client.list({},(err,res)=>{
    console.log(res)
    console.log(err)
})

const call = client.listStream()
call.on("data",products=>{
    console.log(products)
})
call.on("end",e=>{
    console.log("ended call")
})