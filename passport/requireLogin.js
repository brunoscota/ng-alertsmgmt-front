module.exports = (req, res, next) => {
    if (!req.user) {
      res.status(401).send({ error: 'You must login!' });
      //return res.redirect('/login')      
    }
    next();
  };