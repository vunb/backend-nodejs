const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const UserService = require('../services/user.service');
const svUser = new UserService();

// config passport
passport.serializeUser(function (user, cb) {
  cb(null, user.id);
})

passport.deserializeUser(function (id, cb) {
  svUser.getById(id).then((user) => {
    cb(null, user);
  })
  .catch(err => {
    cb(err);
  })
});

passport.use(new LocalStrategy(function (username, password, done) {
  svUser.getByUsername(username)
    .then(user => {

      if (!user) {
        return done(null, false);
      }

      if (user.password !== password) {
        return done(null, false);
      }

      return done(null, user);
    })
    .catch(err => {
      return done(err);
    })
}))

module.exports = function configPassport(app) {

  app.use(passport.initialize());
  app.use(passport.session());

  app.get('/success', (req, res) =>  {
    res.send(`Ok: query=${req.query.phone}`)
  });

  app.get('/error', (req, res) => {
    res.send('Error login!');
  });

  app.get('/login', (req, res) => {
    res.render('login');
  })

  app.post('/login', passport.authenticate('local', {
    failureRedirect: '/error'
  }), (req, res) => {
    res.redirect('/success?phone=' + req.user.phone)
  })

}
