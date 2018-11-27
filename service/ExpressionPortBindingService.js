'use strict';

//2nd party includes.
const Sequelize = require('sequelize');
var db = global.db;
/**
 * createUser
 *
 * body CreateUser 
 * returns createUserResponse
 **/
exports.createUser = function(body) {
  
}
/**
 * deleteExpression
 *
 * body DeleteExpression 
 * returns deleteExpressionResponse
 **/
exports.deleteExpression = function(body) {
  let id = 1;
  db.View.destroy({
    where:{userId:1}
  })
  .then(result => {
    console.log("Deletion Status : ",result);
  });
}


/**
 * deleteUser
 *
 * body DeleteUser 
 * returns deleteUserResponse
 **/
exports.deleteUser = function(body) {
  let id = 1;
  db.View.destroy({
    where:{userId:1}
  })
  .then(result => {
    console.log("Deletion Status : ",result);
  })
  .catch(error=>{
    console.log("Error Occurred.");
  });
}


/**
 * editUser
 *
 * body EditUser 
 * returns editUserResponse
 **/
exports.editUser = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "parameters" : "parameters"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * getAcquaintances
 *
 * body GetAcquaintances 
 * returns getAcquaintancesResponse
 **/
exports.getAcquaintances = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "parameters" : "parameters"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * getExpression
 *
 * body GetExpression 
 * returns getExpressionResponse
 **/
exports.getExpression = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "parameters" : "parameters"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * getExpressions
 *
 * body GetExpressions 
 * returns getExpressionsResponse
 **/
exports.getExpressions = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "parameters" : "parameters"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * getUser
 *
 * body GetUser 
 * returns getUserResponse
 **/
exports.getUser = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "parameters" : "parameters"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * saveExpression
 *
 * body SaveExpression 
 * returns saveExpressionResponse
 **/
exports.saveExpression = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "parameters" : "parameters"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * saveProfile
 *
 * body SaveProfile 
 * returns saveProfileResponse
 **/
exports.saveProfile = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "parameters" : "parameters"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

