'use strict';

var utils = require('../utils/writer.js');
var ExpressionPortBinding = require('../service/ExpressionPortBindingService');

module.exports.createUser = function createUser (req, res, next) {
  var body = req.swagger.params['Body'].value;
  ExpressionPortBinding.createUser(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteExpression = function deleteExpression (req, res, next) {
  var body = req.swagger.params['Body'].value;
  ExpressionPortBinding.deleteExpression(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteUser = function deleteUser (req, res, next) {
  var body = req.swagger.params['Body'].value;
  ExpressionPortBinding.deleteUser(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editUser = function editUser (req, res, next) {
  var body = req.swagger.params['Body'].value;
  ExpressionPortBinding.editUser(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAcquaintances = function getAcquaintances (req, res, next) {
  var body = req.swagger.params['Body'].value;
  ExpressionPortBinding.getAcquaintances(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getExpression = function getExpression (req, res, next) {
  var body = req.swagger.params['Body'].value;
  ExpressionPortBinding.getExpression(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getExpressions = function getExpressions (req, res, next) {
  var body = req.swagger.params['Body'].value;
  ExpressionPortBinding.getExpressions(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUser = function getUser (req, res, next) {
  var body = req.swagger.params['Body'].value;
  ExpressionPortBinding.getUser(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.saveExpression = function saveExpression (req, res, next) {
  var body = req.swagger.params['Body'].value;
  ExpressionPortBinding.saveExpression(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.saveProfile = function saveProfile (req, res, next) {
  var body = req.swagger.params['Body'].value;
  ExpressionPortBinding.saveProfile(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
