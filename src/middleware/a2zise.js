const passport = require("passport");
const { Strategy: BearerStrategy } = require("passport-http-bearer");
const { grpcClients } = require("src/rpc-proto");

module.exports = function (req, res, next) {
  passport.authenticate("bearer", { session: false });
  next();
};

passport.use(new BearerStrategy(
    function(token, done) {
      User.findOne({ token: token }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        return done(null, user, { scope: 'all' });
      });
    }
));

// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     grpcClients.userClient.getUserByUsername({username},(err,user)=>{ //user details
//       if (err) { return done(err);}
//       if (!user) { return done(null, false); }
//       grpcClients.userClient.verifyPassword({password},(err,valid)=>{ //return boolean
//         if (err) { return done(err);}
//         if (!valid) { return done(null, false); }
//       })
//       return done(null, user);
//     })
//   }
// ));


const get = async (req, res, next) => {
  await grpcClients.productClient.list({}, (err, response) => {
    if(err) next(err)
    res.send(response);
  });
};

  
