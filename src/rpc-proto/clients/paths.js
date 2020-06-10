const path = require("path");
const PRODUCTS_PROTO = path.resolve("./src") + "/protos/products.proto";
const USERS_PROTO = path.resolve("./src") + "/protos/users.proto";
module.exports = [PRODUCTS_PROTO, USERS_PROTO];
