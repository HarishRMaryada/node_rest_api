// const grpc = require("grpc");
// const protoLoader = require("@grpc/proto-loader");
// const packageDefinition = protoLoader.loadSync([PROTO_PATH,PROTO_PATH1], {});
// const grpcObj = grpc.loadPackageDefinition(packageDefinition);
// const productPackage = grpcObj.productPackage;
// const userPackage = grpcObj.userPackage;

// const client = new productPackage.Product("localhost:50051",grpc.credentials.createInsecure())
// const clientUser = new userPackage.User("localhost:50051",grpc.credentials.createInsecure())

// client.create({
//     "_id":"somerandomid2",
//     "name" :"myproduct",
//     "price":20
// },(err,res)=>{
//     console.log(res)
//     console.log(err)
// })

// client.list({},(err,res)=>{
//     console.log(res)
//     console.log(err)
// })
// clientUser.userlist({},(err,res)=>{
//     console.log(res)
//     console.log(err)
// })

// const call = client.listStream()
// call.on("data",products=>{
//     console.log(products)
// })
// call.on("end",e=>{
//     console.log("ended call")
// })