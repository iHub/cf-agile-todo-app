var Seq = require('sequelize'),
  db = require('../config/db-connect'),

  TodoModel = db.define('todo', {

      id: {
        type: Seq.INTEGER(11).UNSIGNED,
        allowNull: false,
        validate: {
          isNumeric: true
        },
        autoIncrement: true
      },

      todoText: {
        type: Seq.STRING,
        allowNull: false,
        comment: 'What am I suppost to do.'
      },

      isDone: {
        type: Seq.INTEGER,
        allowNull: false,
        defaultValue: 0
      }
    },
    // table configuration
    {
      // add the timestamp attributes (updatedAt, createdAt)
      timestamps: true,
      // don't use camelcase for automatically added attributes but underscore style
      // so updatedAt will be updated_at
      underscored: true,
      // prevent time stamps from using camelase
      // updatedAt to updated_at and createdAt to created-at
      underscore: true,
      // prevent sequelize from transforming the user tables to prural
      freezetableName: true
    });

module.exports = TodoModel;
