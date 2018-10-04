var ActiveDirectoryStrategy = require('passport-activedirectory');
var ActiveDirectory = require('activedirectory')

module.exports = function (passport) {

  var ad = new ActiveDirectory({
    url: 'ldap://',
    baseDN: 'DC=,DC=',
    username: '@',
    password: ''
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
