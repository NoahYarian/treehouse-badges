require('quantize');

module.exports = function (imageURL, cb) {
  // console.log(ColorThief);
  var colorThief = new ColorThief();
  var rgbObj = colorThief.getColor(imageURL);
  cb(rgbObj);
}
