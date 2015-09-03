var expect = require('chai').expect;
var path = require('path');
// require(path.join(process.cwd(), '/lib/mongodb'));
var mongo = require(path.join(process.cwd(), '/lib/mongodb'));
var checkDbForColor = require(path.join(process.cwd(), '/lib/checkDbForColor'));

describe('checkDbForColor', function() {

  before(function (done) {
    mongo.connect(function () {
      console.log(mongo.getDb().collection('badges'));
      // var seedBadge = {
      //   url: 'https://achievement-images.teamtreehouse.com/Generic_Newbie.png',
      //   color: {
      //     'h': 53,
      //     's': 96,
      //     'l': 58
      //   }
      // }

      // global.db.collection('badges').insert(seedBadge, function (err, result) {
        done();
      // });
    });
  });

  // after(function (done) {
  //   global.db.collection('badges')
  // });

  it('should return the correct dominant color for a known badge image', function (done) {
    checkDbForColor('https://achievement-images.teamtreehouse.com/Generic_Newbie.png', function (color) {
      expect(color).to.equal({
        'h': 53,
        's': 96,
        'l': 58
      });
      done();
    });
  });
});
