var path = require('path');
var getProfileJSON = require(path.join(process.cwd(), 'lib/getProfileJSON.js'));

getProfileJSON('noahyarian', function(data) {
  console.log(data.name);
});
