require('dotenv').config()

var ActiveDirectoryStrategy = require('passport-activedirectory');
var ActiveDirectory = require('activedirectory')
const winston = require('../config/winston');

module.exports = function (passport) {

  var ad = new ActiveDirectory({
    url: process.env.AD_URL,
    baseDN: process.env.AD_BASEDN,
    username: process.env.AD_USER,
    password: process.env.AD_PASS
  })

  passport.use(new ActiveDirectoryStrategy({
    integrated: false,
    ldap: ad
  }, async function (profile, ad, done) {
    await ad.isUserMemberOf(profile._json.sAMAccountName, process.env.AD_GROUP, function (err, isMember) {
      if (err){
        winston.error(`${profile._json.displayName} not allowed to login.`);
        return done(err)
      } else{
        winston.info(`${profile._json.displayName} just logged in.`);
        return done(null, profile)
      }
      
    })
  }))

  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((user, done) => {
    done(null, user);
  });

}
