var Seq = require('sequelize'),
  sequelize = new Seq('vvida', 'kn9ts', 'root', {
    host: 'localhost',
    dialect: 'postgres'
  });

module.exports = sequelize;
