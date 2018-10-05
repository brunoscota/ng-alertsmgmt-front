require('dotenv').config()

var ActiveDirectoryStrategy = require('passport-activedirectory');
var ActiveDirectory = require('activedirectory')

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
  }, function (profile, ad, done) {
    console.log(profile._json.sAMAccountName)
    ad.isUserMemberOf(profile._json.sAMAccountName, 'WINTEL SA', function (err, isMember) {
      if (err) return done(err)
      return done(null, profile)
    })
  }))

  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((user, done) => {
    done(null, user);
  });

}
