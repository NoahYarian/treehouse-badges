var path = require('path');
var mongo = require(path.join(process.cwd(), 'lib/mongodb'));

module.exports = function (imageUrl, cb) {
  // mongo.connect(function() {
  //   console.log(mongo.getDb());
  // });
  var collection = global.db.collection('badges');
  collection.findOne({ imageUrl: imageUrl}, function (err, result) {
    cb(badge.color)
  });
}
