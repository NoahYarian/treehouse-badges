var fs = require('fs');
var _ = require('lodash');
getProfileJSON = require('./getProfileJSON');
var request = require('request');
var downloadFiles = require('./downloadFiles');

module.exports = function (username, cb) {
  var imagesArr = [];
  getProfileJSON(username, function (data) {
    _.forEach(data.badges, function(badge) {
      imagesArr.push(badge.icon_url);
    });
    downloadFiles(imagesArr, function () {
      cb();
    });
  });
}
