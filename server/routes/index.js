module.exports = function(app, config) {
  require('./users')(app, config);
  require('./todo')(app, config);

  /* GET home page. */
  app.get('/*', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    res.sendFile('index.html', {
      root: './public/'
    });
  });
};
