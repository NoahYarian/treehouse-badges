var request = require('request');

module.exports = function(username, cb) {
  var url = 'https://teamtreehouse.com/' + username + '.json';
  request({uri: url, json: true}, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      cb(body);
    }
  });
}
