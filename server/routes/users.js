// var User = require('../schemas/users');
module.exports = function(app) {

  /* GET users listing. */
  app.route('/users/:id')
    .get(function(req, res) {
      res.send('respond with a resource');
    });
};
