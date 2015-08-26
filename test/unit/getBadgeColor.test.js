var expect = require('chai').expect;
var path = require('path');
var getBadgeColor = require(path.join(process.cwd(), 'lib/getBadgeColor.js'));

describe('getBadgeColor', function() {
  it('should return the dominant color of a badge', function () {
    var testImageURL = 'https://achievement-images.teamtreehouse.com/Generic_Newbie.png';
    getBadgeColor(testImageURL, function(rgbObj) {
      expect(rgbObj).to.equal({
        R: 234,
        G: 123,
        B: 45
      });
    });
  });
});
