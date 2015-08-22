var expect = require('chai').expect;
var path = require('path');
var getProfileJSON = require(path.join(process.cwd(), 'lib/getProfileJSON.js'));

describe('getProfileJSON', function() {
  it('should return Treehouse profile JSON', function (done) {
    this.timeout(5000);
    getProfileJSON('noahyarian', function(data) {
      expect(data.badges).to.include({
        id: 49,
        name: 'Newbie',
        url: 'https://teamtreehouse.com/noahyarian',
        icon_url: 'https://achievement-images.teamtreehouse.com/Generic_Newbie.png',
        earned_date: '2015-02-09T19:18:57.000Z',
        courses: []
      });
      done();
    });
  });
});
