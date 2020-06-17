const passport = require("passport");
const { Strategy: BearerStrategy } = require("passport-http-bearer");
const { Strategy: LocalStrategy } = require("passport-local");
const { grpcClients } = require("src/rpc-proto");
const {}

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

passport.use(new LocalStrategy(
  function(username, password, done) {
    grpcClients.userClient.getUserByUsername({username},(err,user)=>{ //user details
      if (err) { return done(err);}
      if (!user) { return done(null, false); }
      grpcClients.userClient.verifyPassword({password},(err,valid)=>{ //return boolean
        if (err) { return done(err);}
        if (!valid) { return done(null, false); }
      })
      grpcClients.tokenClient.generateAccessAndRefreshToken({userId:user["_id"]},(err,valid)=>{ //return boolean
        if (err) { return done(err);}
        if (!valid) { return done(null, false); }
      })
      return done(null, user);
    })
  }
));

  
