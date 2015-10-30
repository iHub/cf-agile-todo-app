module.exports = function(app, config) {
  require('./users')(app, config);

  /* GET home page. */
  app.get('/*', function(req, res) {
    // res.render('index', { title: 'Express' });
    res.sendFile('index.html', {
      root: './public/'
    });
  });
};
