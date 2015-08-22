var express = require('express');
var router = express.Router();
var path = require('path');
var getProfileJSON = require(path.join(process.cwd(), 'lib/getProfileJSON.js'));

router.get('/:username', function (req, res) {
  getProfileJSON(req.params.username, function(data) {
    res.render('templates/badges', {username: req.params.username, profileJSON: data});
  });
});

router.post('/', function (req, res) {
  console.log("badges req.params: ", req.params);
  console.log("badges req.body: ", req.body);
  getProfileJSON(req.body.username, function(data) {
    res.render('templates/badges', {username: req.body.username, profileJSON: data});
  });
});

module.exports = router;
