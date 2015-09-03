'use strict';
var path = require('path');
var mongo = require('mongodb').MongoClient;
var url = require(path.join(process.cwd(), 'config/secrets')).db;

var database;

module.exports.connect = function connect(cb) {
  mongo.connect(url, function (err, db) {
    database = db || null;
    cb(err, db);
  });
};

module.exports.getDb = function () {
  return database;
};

// var url = process.env.MONGODB_URL;

// if (!global.db) {
//   mongo.connect('mongodb://localhost:27017/treehouse-badges', function(err, db) {
//     console.log('err: ',err);
//     global.db = db;
//   });
// }

// 'use strict';

// var mongo = require('mongodb').MongoClient;
// // var url = require('../../config/secrets').db;
// var url = 'mongodb://localhost:27017/treehouse-badges';

// var database;

// module.exports.connect = function connect(cb) {
//   mongo.connect(url, function (err, db) {
//     database = db || null;
//     cb(err, db);
//   });
// };

// module.exports.getDb = function () {
//   return database;
// };
