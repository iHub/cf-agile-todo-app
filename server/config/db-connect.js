var Seq = require('sequelize'),
  sequelize = new Seq('vvida', 'kn9ts', 'root', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432
  });

sequelize.sync();
module.exports = sequelize;
