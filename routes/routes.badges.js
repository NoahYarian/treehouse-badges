var express = require('express');
var router = express.Router();
var path = require('path');
var getProfileJSON = require(path.join(process.cwd(), 'lib/getProfileJSON'));
var getBadgeImages = require(path.join(process.cwd(), 'lib/getBadgeImages'));

router.get('/:username', function (req, res) {
  var user = req.params.username;
  getProfileJSON(user, function(data) {
    getBadgeImages(user, function() {
      res.render('templates/badges', {username: user, profileJSON: data});
    });
  });
});

router.post('/', function (req, res) {
  var user = req.body.username;
  getProfileJSON(user, function(data) {
    getBadgeImages(user, function() {
      res.render('templates/badges', {username: user, profileJSON: data});
    });
  });
});

module.exports = router;
