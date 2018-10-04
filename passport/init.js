var ActiveDirectoryStrategy = require('passport-activedirectory');
var ActiveDirectory = require('activedirectory')

module.exports = function (passport) {

  var ad = new ActiveDirectory({
    url: '',
    baseDN: '',
    username: '',
    password: ''
  })

  passport.use(new ActiveDirectoryStrategy({
    integrated: false,
    ldap: ad
  }, function (profile, ad, done) {
    ad.isUserMemberOf(profile._json.dn, 'Suporte a Sistemas', function (err, isMember) {
      if (err) return done(err)
      return done(null, profile)
    })
  }))

}