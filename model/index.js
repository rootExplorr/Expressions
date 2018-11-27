'use strict';

//Application specific imports.
var User = require('./User');
var UserSettings = require('./UserSettings');
var View = require('./View');
var Message = require('./Message');
var Relation = require('./Relation');

//2nd party imports.
var Sequelize = require('Sequelize');

//Initialize Sequelize.
var sequelize = new Sequelize('expressions','expressions_pg','expressions',{
    host:'192.168.1.11',
    dialect:'postgres'
});

// load models
var models = [
  'User',
  'UserSettings',
  'Relation',
  'View',
  'Message'
];

models.forEach(function(model) {
  module.exports[model] = sequelize.import(__dirname + '/' + model);
});

(function(m){
	m.UserSettings.belongsTo(m.User);
  m.Relation.belongsTo(m.User);
  m.View.belongsTo(m.User);
  m.Message.belongsTo(m.User);
})(module.exports);

//Create the DB
sequelize.sync({force:true})
  .then(()=>{
    console.log("Database and tables successfully created.");
  })

module.exports.sequelize = sequelize;